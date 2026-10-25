import { randomUUID } from "node:crypto";
import { prisma } from "../database";
import { CreateCopiesSchema } from "./copy.schemas";

function handleDatabaseError(error: unknown): never {
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    error.code === "P2002"
  ) {
    throw new Error("DUPLICATE_INVENTORY_CODE");
  }

  throw error;
}

function createInventoryCode(): string {
  return `TOM-${randomUUID().toUpperCase()}`;
}

export class CopyService {
  async searchActiveBooks(query: string) {
    const term = query.trim();

    return prisma.book.findMany({
      where: {
        isActive: true,
        ...(term
          ? {
              OR: [
                { title: { contains: term } },
                { isbn: { contains: term } },
                { authors: { some: { author: { name: { contains: term } } } } },
              ],
            }
          : {}),
      },
      select: {
        id: true,
        title: true,
        isbn: true,
        authors: { select: { author: { select: { name: true } } } },
      },
      orderBy: { title: "asc" },
      take: 20,
    });
  }

  async createCopies(input: unknown, librarianId: string) {
    const result = CreateCopiesSchema.safeParse(input);

    if (!result.success) {
      const issue = result.error.issues[0];
      const field = issue?.path[0];

      if (field === "bookId") throw new Error("COPY_BOOK_REQUIRED");
      if (field === "quantity") {
        throw new Error(
          issue.message === "QUANTITY_LIMIT_EXCEEDED"
            ? "COPY_QUANTITY_LIMIT_EXCEEDED"
            : "COPY_QUANTITY_INVALID",
        );
      }
      if (field === "acquisitionDate") {
        throw new Error(
          issue.message === "DATE_CANNOT_BE_FUTURE"
            ? "COPY_ACQUISITION_DATE_CANNOT_BE_FUTURE"
            : "COPY_ACQUISITION_DATE_INVALID",
        );
      }
      if (
        field === "shelfLocation" ||
        field === "conservationCondition" ||
        field === "acquisitionMethod"
      ) {
        throw new Error("COPY_TEXT_FIELD_INVALID");
      }

      throw new Error("COPY_INPUT_INVALID");
    }

    const data = result.data;

    try {
      return await prisma.$transaction(async (transaction) => {
        const book = await transaction.book.findUnique({
          where: { id: data.bookId },
          select: { id: true, title: true, isActive: true },
        });

        if (!book) throw new Error("COPY_BOOK_NOT_FOUND");
        if (!book.isActive) throw new Error("COPY_BOOK_INACTIVE");

        const registration = await transaction.copyRegistrationLog.create({
          data: {
            bookId: book.id,
            createdByLibrarianId: librarianId,
            quantity: data.quantity,
          },
        });

        const copies = await Promise.all(
          Array.from({ length: data.quantity }, () =>
            transaction.copy.create({
              data: {
                inventoryCode: createInventoryCode(),
                bookId: book.id,
                status: "AVAILABLE",
                shelfLocation: data.shelfLocation,
                conservationCondition: data.conservationCondition,
                acquisitionDate: data.acquisitionDate,
                acquisitionMethod: data.acquisitionMethod,
                registrationLogId: registration.id,
              },
              select: {
                id: true,
                inventoryCode: true,
                status: true,
              },
            }),
          ),
        );

        return {
          book,
          quantity: copies.length,
          copies,
          createdAt: registration.createdAt,
        };
      });
    } catch (error) {
      if (
        error instanceof Error &&
        ["COPY_BOOK_NOT_FOUND", "COPY_BOOK_INACTIVE"].includes(error.message)
      ) {
        throw error;
      }

      handleDatabaseError(error);
    }
  }
}
