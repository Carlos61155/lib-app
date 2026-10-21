import { prisma } from "../database";
import { CreateGenreSchema } from "./genre.schemas";

function normalizeGenreName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim()
    .toLocaleLowerCase("pt-BR");
}

function handleDatabaseError(error: unknown): never {
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    error.code === "P2002"
  ) {
    throw new Error("DUPLICATE_GENRE");
  }

  throw error;
}

export class GenreService {
  async createGenre(input: unknown, librarianId: string) {
    const result = CreateGenreSchema.safeParse(input);

    if (!result.success) {
      const fields = new Set(result.error.issues.map((issue) => issue.path[0]));

      if (fields.has("name")) {
        throw new Error("GENRE_NAME_INVALID");
      }

      if (fields.has("description")) {
        throw new Error("GENRE_DESCRIPTION_INVALID");
      }

      throw new Error("GENRE_INPUT_INVALID");
    }

    const data = result.data;

    try {
      return await prisma.$transaction(async (transaction) => {
        const genres = await transaction.genre.findMany({
          select: { name: true },
        });

        const normalizedName = normalizeGenreName(data.name);
        const duplicate = genres.some(
          (genre) => normalizeGenreName(genre.name) === normalizedName,
        );

        if (duplicate) {
          throw new Error("DUPLICATE_GENRE");
        }

        const genre = await transaction.genre.create({
          data: {
            name: data.name,
            description: data.description,
            isActive: true,
          },
        });

        await transaction.registrationGenreLog.create({
          data: {
            genreId: genre.id,
            createdByLibrarianId: librarianId,
          },
        });

        return genre;
      });
    } catch (error) {
      handleDatabaseError(error);
    }
  }
}
