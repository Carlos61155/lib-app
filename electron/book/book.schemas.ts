import z from "zod";

function isValidIsbn(value: string): boolean {
  const isbn = value.replace(/[\s-]/g, "").toUpperCase();

  if (/^\d{9}[\dX]$/.test(isbn)) {
    const sum = [...isbn].reduce(
      (total, char, index) =>
        total + (char === "X" ? 10 : Number(char)) * (10 - index),
      0,
    );

    return sum % 11 === 0;
  }

  if (/^\d{13}$/.test(isbn)) {
    const sum = [...isbn].reduce(
      (total, char, index) => total + Number(char) * (index % 2 === 0 ? 1 : 3),
      0,
    );

    return sum % 10 === 0;
  }

  return false;
}

const isbnSchema = z
  .string()
  .trim()
  .min(1, "ISBN_REQUIRED")
  .max(20, "ISBN_FORMAT_INVALID")
  .regex(/^[\dXx\s-]+$/, "ISBN_FORMAT_INVALID")
  .refine(isValidIsbn, { message: "ISBN_INVALID" })
  .transform((value) => value.replace(/[\s-]/g, "").toUpperCase());

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, "TEXT_TOO_LONG")
    .transform((value) => (value.length === 0 ? undefined : value))
    .optional();

const selectedIds = (requiredMessage: string) =>
  z
    .array(z.string().uuid("ID_INVALID"))
    .min(1, requiredMessage)
    .refine((ids) => new Set(ids).size === ids.length, {
      message: "DUPLICATE_SELECTION",
    });

export const CreateBookSchema = z
  .object({
    title: z.string().trim().min(1, "TITLE_REQUIRED").max(300, "TEXT_TOO_LONG"),
    isbn: isbnSchema,
    publisher: z
      .string()
      .trim()
      .min(1, "PUBLISHER_REQUIRED")
      .max(200, "TEXT_TOO_LONG"),
    yearOfPublication: z.coerce
      .number()
      .int("YEAR_INVALID")
      .min(1, "YEAR_INVALID")
      .max(new Date().getFullYear(), "YEAR_CANNOT_BE_FUTURE"),

    authorIds: selectedIds("AUTHOR_REQUIRED"),
    genreIds: selectedIds("GENRE_REQUIRED"),

    subTitle: optionalText(300),
    edition: optionalText(50),
    numberOfPages: z
      .union([
        z.coerce.number().int().min(1, "NUMBER_OF_PAGES_INVALID"),
        z.literal(""),
      ])
      .optional()
      .transform((value) => (value === "" ? undefined : value)),
    language: optionalText(50),
    synopsis: optionalText(5000),
  })
  .strict();
