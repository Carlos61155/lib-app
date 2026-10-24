import { prisma } from "../database";
import { CreateBookSchema } from "./book.schemas";

function handleDatabaseError(error: unknown): never {
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    error.code === "P2002"
  ) {
    throw new Error("DUPLICATE_BOOK");
  }

  throw error;
}

export class BookService {
  async createBook(input: unknown, librarianId: string, coverPath?: string) {
    const result = CreateBookSchema.safeParse(input);

    if (!result.success) {
      const fields = new Set(result.error.issues.map((issue) => issue.path[0]));

      if (fields.has("title")) throw new Error("BOOK_TITLE_INVALID");
      if (fields.has("isbn")) throw new Error("BOOK_ISBN_INVALID");
      if (fields.has("publisher")) throw new Error("BOOK_PUBLISHER_INVALID");
      if (fields.has("yearOfPublication")) {
        throw new Error("BOOK_YEAR_INVALID");
      }
      if (fields.has("authorIds")) throw new Error("BOOK_AUTHORS_INVALID");
      if (fields.has("genreIds")) throw new Error("BOOK_GENRES_INVALID");
      throw new Error("BOOK_INPUT_INVALID");
    }

    const data = result.data;

    try {
      return await prisma.$transaction(async (transaction) => {
        const bookAlreadyExists = await transaction.book.findUnique({
          where: {
            isbn: data.isbn,
          },
        });

        if (bookAlreadyExists) {
          throw new Error("DUPLICATE_BOOK");
        }

        const [authors, genres] = await Promise.all([
          transaction.author.findMany({
            where: { id: { in: data.authorIds } },
            select: { id: true, isActive: true },
          }),
          transaction.genre.findMany({
            where: { id: { in: data.genreIds } },
            select: { id: true, isActive: true },
          }),
        ]);

        if (
          authors.length !== data.authorIds.length ||
          authors.some((author) => !author.isActive)
        ) {
          throw new Error("BOOK_AUTHOR_INACTIVE_OR_NOT_FOUND");
        }

        if (
          genres.length !== data.genreIds.length ||
          genres.some((genre) => !genre.isActive)
        ) {
          throw new Error("BOOK_GENRE_INACTIVE_OR_NOT_FOUND");
        }

        const book = await transaction.book.create({
          data: {
            title: data.title,
            isbn: data.isbn,
            publisher: data.publisher,
            yearOfPublication: data.yearOfPublication,
            subTitle: data.subTitle,
            edition: data.edition,
            numberOfPages: data.numberOfPages,
            language: data.language,
            synopsis: data.synopsis,
            coverPath: coverPath ?? null,
            isActive: true,
            authors: {
              create: data.authorIds.map((authorId) => ({
                author: { connect: { id: authorId } },
              })),
            },
            genres: {
              create: data.genreIds.map((genreId) => ({
                genre: { connect: { id: genreId } },
              })),
            },
          },
          include: {
            authors: { include: { author: true } },
            genres: { include: { genre: true } },
          },
        });

        await transaction.registrationBookLog.create({
          data: {
            bookId: book.id,
            createdByLibrarianId: librarianId,
          },
        });

        return book;
      });
    } catch (error) {
      handleDatabaseError(error);
    }
  }
}
