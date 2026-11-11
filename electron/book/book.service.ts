import { prisma } from "../database";
import { CreateBookSchema } from "./book.schemas";
import { SearchBooksSchema } from "./book-search.schemas";

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
        if (
          result.error.issues.some(
            (issue) =>
              issue.path[0] === "yearOfPublication" &&
              issue.message === "YEAR_CANNOT_BE_FUTURE",
          )
        ) {
          throw new Error("BOOK_YEAR_CANNOT_BE_FUTURE");
        }
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

  async searchBooks(input: unknown) {
    const parsed = SearchBooksSchema.safeParse(input);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];

      if (issue?.message === "SEARCH_CRITERIA_REQUIRED") {
        throw new Error("BOOK_SEARCH_CRITERIA_REQUIRED");
      }
      if (issue?.message === "SEARCH_TEXT_TOO_SHORT") {
        throw new Error("BOOK_SEARCH_TEXT_TOO_SHORT");
      }
      if (issue?.message === "SEARCH_YEAR_CANNOT_BE_FUTURE") {
        throw new Error("BOOK_SEARCH_YEAR_CANNOT_BE_FUTURE");
      }
      if (issue?.path[0] === "yearOfPublication") {
        throw new Error("BOOK_SEARCH_YEAR_INVALID");
      }
      if (issue?.path[0] === "isbn") {
        throw new Error("BOOK_SEARCH_ISBN_INVALID");
      }
      throw new Error("BOOK_SEARCH_FILTERS_INVALID");
    }

    const filters = parsed.data;

    const books = await prisma.book.findMany({
      where: {
        ...(filters.title ? { title: { contains: filters.title } } : {}),
        ...(filters.author
          ? {
              authors: {
                some: {
                  author: { name: { contains: filters.author } },
                },
              },
            }
          : {}),
        ...(filters.genre
          ? {
              genres: {
                some: {
                  genre: { name: { contains: filters.genre } },
                },
              },
            }
          : {}),
        ...(filters.publisher
          ? { publisher: { contains: filters.publisher } }
          : {}),
        ...(filters.isbn ? { isbn: filters.isbn } : {}),
        ...(filters.yearOfPublication !== undefined
          ? { yearOfPublication: filters.yearOfPublication }
          : {}),
        ...(filters.availableOnly
          ? {
              isActive: true,
              copies: { some: { status: "AVAILABLE" } },
            }
          : {}),
      },
      select: {
        id: true,
        title: true,
        subTitle: true,
        isbn: true,
        publisher: true,
        yearOfPublication: true,
        edition: true,
        numberOfPages: true,
        language: true,
        synopsis: true,
        coverPath: true,
        isActive: true,
        authors: {
          select: { author: { select: { id: true, name: true } } },
        },
        genres: {
          select: { genre: { select: { id: true, name: true } } },
        },
        copies: {
          select: {
            id: true,
            inventoryCode: true,
            shelfLocation: true,
            status: true,
          },
          orderBy: { inventoryCode: "asc" },
        },
      },
      orderBy: { title: "asc" },
    });

    return books.map((book) => {
      const totalCopies = book.copies.length;
      const availableCopies = book.isActive
        ? book.copies.filter((copy) => copy.status === "AVAILABLE").length
        : 0;

      return {
        ...book,
        authors: book.authors.map(({ author }) => author),
        genres: book.genres.map(({ genre }) => genre),
        totalCopies,
        availableCopies,
        copies: book.copies.map((copy) => ({
          ...copy,
          status: copy.status,
        })),
      };
    });
  }

  async getBookDetails(bookId: string) {
    if (!bookId.trim()) throw new Error("BOOK_ID_INVALID");

    const book = await prisma.book.findUnique({
      where: { id: bookId },
      select: {
        id: true,
        title: true,
        subTitle: true,
        isbn: true,
        publisher: true,
        yearOfPublication: true,
        edition: true,
        numberOfPages: true,
        language: true,
        synopsis: true,
        coverPath: true,
        isActive: true,
        authors: {
          select: { author: { select: { id: true, name: true } } },
        },
        genres: {
          select: { genre: { select: { id: true, name: true } } },
        },
        copies: {
          select: {
            id: true,
            inventoryCode: true,
            shelfLocation: true,
            status: true,
          },
          orderBy: { inventoryCode: "asc" },
        },
      },
    });

    if (!book) throw new Error("BOOK_NOT_FOUND");

    return {
      ...book,
      authors: book.authors.map(({ author }) => author),
      genres: book.genres.map(({ genre }) => genre),
      totalCopies: book.copies.length,
      availableCopies: book.isActive
        ? book.copies.filter((copy) => copy.status === "AVAILABLE").length
        : 0,
    };
  }
}
