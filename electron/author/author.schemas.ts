import z from "zod";

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, "TEXT_TOO_LONG")
    .transform((value) => (value.length === 0 ? undefined : value))
    .optional();

const optionalDate = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value === "" ? undefined : value))
  .refine(
    (value) =>
      value === undefined ||
      (/^\d{4}-\d{2}-\d{2}$/.test(value) &&
        !Number.isNaN(Date.parse(`${value}T00:00:00.000Z`)) &&
        new Date(`${value}T00:00:00.000Z`).toISOString().slice(0, 10) === value),
    { message: "DATE_INVALID" },
  )
  .refine(
    (value) =>
      value === undefined ||
      value <= new Date().toISOString().slice(0, 10),
    { message: "DATE_CANNOT_BE_FUTURE" },
  )
  .transform((value) =>
    value === undefined ? undefined : new Date(`${value}T00:00:00.000Z`),
  );

export const CreateAuthorSchema = z
  .object({
    name: z.string().trim().min(1, "NAME_REQUIRED").max(240),
    nationality: z.string().trim().min(1, "NATIONALITY_REQUIRED").max(100),
    pseudonym: optionalText(120),
    dateOfBirth: optionalDate,
    dateOfDeath: optionalDate,
    biography: optionalText(2000),
  })
  .strict()
  .superRefine((author, context) => {
    if (
      author.dateOfBirth &&
      author.dateOfDeath &&
      author.dateOfDeath < author.dateOfBirth
    ) {
      context.addIssue({
        code: "custom",
        path: ["dateOfDeath"],
        message: "DATE_OF_DEATH_BEFORE_BIRTH",
      });
    }
  });
