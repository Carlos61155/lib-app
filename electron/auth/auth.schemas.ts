import z from "zod";

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
    accessCode: z.string().trim().min(1, "INITIAL_LIBRARIAN_ACCESS_CODE_REQUIRED").max(64),
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
