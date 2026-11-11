import z from "zod";

const partialText = z
  .string()
  .trim()
  .min(2, "SEARCH_TEXT_TOO_SHORT")
  .max(300, "SEARCH_TEXT_TOO_LONG")
  .optional();

export const SearchBooksSchema = z
  .object({
    title: partialText,
    author: partialText,
    genre: partialText,
    publisher: z
      .string()
      .trim()
      .min(2, "SEARCH_TEXT_TOO_SHORT")
      .max(200)
      .optional(),
    isbn: z
      .string()
      .trim()
      .min(1, "SEARCH_ISBN_INVALID")
      .max(20, "SEARCH_ISBN_INVALID")
      .regex(/^[\dXx\s-]+$/, "SEARCH_ISBN_INVALID")
      .transform((value) => value.replace(/[\s-]/g, "").toUpperCase()),
    yearOfPublication: z
      .string()
      .regex(/^\d{4}$/, "SEARCH_YEAR_INVALID")
      .refine(
        (value) => Number(value) <= new Date().getFullYear(),
        "SEARCH_YEAR_CANNOT_BE_FUTURE",
      )
      .transform(Number)
      .optional(),
    availableOnly: z.boolean().optional(),
  })
  .strict()
  .refine(
    (filters) =>
      Boolean(
        filters.title ||
        filters.author ||
        filters.genre ||
        filters.publisher ||
        filters.isbn ||
        filters.yearOfPublication !== undefined ||
        filters.availableOnly,
      ),
    { message: "SEARCH_CRITERIA_REQUIRED" },
  );

export type SearchBooksInput = z.input<typeof SearchBooksSchema>;
