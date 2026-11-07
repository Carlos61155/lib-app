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
      if (field === "copies" && issue.path.length > 1) {
        if (issue.path[2] === "shelfLocation") throw new Error("COPY_LOCATION_INVALID");
        if (issue.path[2] === "conservationCondition") throw new Error("COPY_CONDITION_INVALID");
        throw new Error("COPY_OBSERVATION_INVALID");
      }
      if (field === "copies") {
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
      if (field === "acquisitionMethod") {
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

        const sequence = await transaction.copyCodeSequence.update({
          where: { id: 1 },
          data: { lastValue: { increment: data.copies.length } },
          select: { lastValue: true },
        });
        const firstInventoryNumber = sequence.lastValue - data.copies.length + 1;

        const registration = await transaction.copyRegistrationLog.create({
          data: {
            bookId: book.id,
            createdByLibrarianId: librarianId,
            quantity: data.copies.length,
          },
        });

        const copies = await Promise.all(
          data.copies.map((copy, index) =>
            transaction.copy.create({
              data: {
                inventoryCode: String(firstInventoryNumber + index).padStart(6, "0"),
                bookId: book.id,
                status: "AVAILABLE",
                shelfLocation: copy.shelfLocation,
                conservationCondition: copy.conservationCondition,
                observation: copy.observation,
                acquisitionDate: data.acquisitionDate,
                acquisitionMethod: data.acquisitionMethod,
                registrationLogId: registration.id,
              },
              select: {
                id: true,
                inventoryCode: true,
                status: true,
                shelfLocation: true,
                conservationCondition: true,
                observation: true,
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
