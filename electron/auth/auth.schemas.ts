import z from "zod";

function isValidCpf(value: string): boolean {
  if (!/^\d{11}$/.test(value) || /^(\d)\1{10}$/.test(value)) {
    return false;
  }

  let sum = 0;

  for (let index = 0; index < 9; index += 1) {
    sum += Number(value[index]) * (10 - index);
  }

  const firstDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (firstDigit !== Number(value[9])) {
    return false;
  }

  sum = 0;

  for (let index = 0; index < 10; index += 1) {
    sum += Number(value[index]) * (11 - index);
  }

  const secondDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  return secondDigit === Number(value[10]);
}

const cpfSchema = z
  .string()
  .trim()
  .refine(
    (value) =>
      /^\d{11}$/.test(value) || /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value),
    { message: "CPF_FORMAT_INVALID" },
  )
  .transform((value) => value.replace(/[.-]/g, ""))
  .refine(isValidCpf, { message: "CPF_INVALID" });

export const LoginSchema = z
  .object({
    accessCode: z.string().trim().min(1, "ACCESS_CODE_REQUIRED"),
    password: z.string().min(1, "PASSWORD_REQUIRED"),
  })
  .strict();

export const InitialLibrarianSchema = z
  .object({
    name: z.string().trim().min(1, "INITIAL_LIBRARIAN_NAME_REQUIRED").max(120),
    email: z.string().trim().email("INITIAL_LIBRARIAN_EMAIL_INVALID").max(254),
    cpf: cpfSchema,
    accessCode: z
      .string()
      .trim()
      .min(1, "INITIAL_LIBRARIAN_ACCESS_CODE_REQUIRED")
      .max(64),
    password: z.string().min(1, "INITIAL_LIBRARIAN_PASSWORD_REQUIRED").max(128),
  })
  .strict();

export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "CURRENT_PASSWORD_REQUIRED"),
    newPassword: z.string().min(12, "PASSWORD_TOO_SHORT"),
  })
  .strict();

export type ChangePasswordInput = z.infer<typeof ChangePasswordSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
