import { prisma } from "../database";
import { CreateAuthorSchema } from "./author.schemas";

function normalizeName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim()
    .replace(/\s+/g, " ")
    .toLocaleLowerCase("pt-BR");
}

function isDuplicateAuthor(
  existing: { name: string; dateOfBirth: Date | null },
  input: { name: string; dateOfBirth?: Date },
): boolean {
  if (normalizeName(existing.name) !== normalizeName(input.name)) return false;
  if (!input.dateOfBirth) return true;

  return existing.dateOfBirth?.getTime() === input.dateOfBirth.getTime();
}

function handleDatabaseError(error: unknown): never {
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    error.code === "P2002"
  ) {
    throw new Error("DUPLICATE_AUTHOR");
  }

  throw error;
}

export class AuthorService {
  async listActiveAuthors() {
    return prisma.author.findMany({
      where: { isActive: true },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });
  }

  async createAuthor(input: unknown, librarianId: string) {
    const data = CreateAuthorSchema.parse(input);

    try {
      return await prisma.$transaction(async (transaction) => {
        const authorsWithSameName = await transaction.author.findMany({
          select: { name: true, dateOfBirth: true },
        });

        if (
          authorsWithSameName.some((author) => isDuplicateAuthor(author, data))
        ) {
          throw new Error("DUPLICATE_AUTHOR");
        }

        const author = await transaction.author.create({
          data: {
            name: data.name,
            nationality: data.nationality ?? "",
            pseudonym: data.pseudonym,
            dateOfBirth: data.dateOfBirth,
            dateOfDeath: data.dateOfDeath,
            biography: data.biography,
            isActive: true,
          },
        });

        await transaction.registrationAuthorLog.create({
          data: {
            authorId: author.id,
            createdByLibrarianId: librarianId,
          },
        });

        return author;
      });
    } catch (error) {
      handleDatabaseError(error);
    }
  }
}
