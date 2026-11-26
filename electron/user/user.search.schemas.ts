import z from "zod";

const cpfSchema = z
  .string()
  .trim()
  .min(1, "USER_SEARCH_CPF_INVALID")
  .regex(/^(?:\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/, "USER_SEARCH_CPF_INVALID")
  .transform((value) => value.replace(/[.-]/g, ""));

export const SearchUsersSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "USER_SEARCH_NAME_TOO_SHORT")
      .max(120, "USER_SEARCH_NAME_TOO_LONG")
      .optional(),
    registrationNumber: z
      .string()
      .trim()
      .min(1, "USER_SEARCH_REGISTRATION_INVALID")
      .max(40, "USER_SEARCH_REGISTRATION_INVALID")
      .optional(),
    cpf: cpfSchema.optional(),
    type: z.enum(["STUDENT", "PROFESSOR"]).optional(),
    status: z.enum(["ACTIVE", "BLOCKED"]).optional(),
  })
  .strict()
  .refine(
    (filters) =>
      Boolean(
        filters.name ||
        filters.registrationNumber ||
        filters.cpf ||
        filters.type ||
        filters.status,
      ),
    { message: "USER_SEARCH_CRITERIA_REQUIRED" },
  );

export type SearchUsersInput = z.input<typeof SearchUsersSchema>;
