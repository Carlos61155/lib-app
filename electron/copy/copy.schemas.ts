import z from "zod";

export const MAX_COPIES_PER_OPERATION = 20;

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, "TEXT_TOO_LONG")
    .transform((value) => (value.length === 0 ? undefined : value))
    .optional();

const optionalAcquisitionDate = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value === "" ? undefined : value))
  .refine(
    (value) =>
      value === undefined ||
      (/^\d{4}-\d{2}-\d{2}$/.test(value) &&
        !Number.isNaN(Date.parse(`${value}T00:00:00.000Z`)) &&
        new Date(`${value}T00:00:00.000Z`).toISOString().slice(0, 10) ===
          value),
    { message: "DATE_INVALID" },
  )
  .refine(
    (value) =>
      value === undefined || value <= new Date().toISOString().slice(0, 10),
    { message: "DATE_CANNOT_BE_FUTURE" },
  )
  .transform((value) =>
    value === undefined ? undefined : new Date(`${value}T00:00:00.000Z`),
  );

export const CreateCopiesSchema = z
  .object({
    bookId: z.string().uuid("BOOK_ID_INVALID"),
    quantity: z.coerce
      .number()
      .int("QUANTITY_INVALID")
      .min(1, "QUANTITY_INVALID")
      .max(MAX_COPIES_PER_OPERATION, "QUANTITY_LIMIT_EXCEEDED"),
    shelfLocation: optionalText(100),
    conservationCondition: optionalText(100),
    acquisitionDate: optionalAcquisitionDate,
    acquisitionMethod: optionalText(100),
  })
  .strict();

export type CreateCopiesInput = z.infer<typeof CreateCopiesSchema>;
