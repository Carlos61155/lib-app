import z from "zod";

export const LoginSchema = z
  .object({
    accessCode: z.string().trim().min(1, "ACCESS_CODE_REQUIRED"),
    password: z.string().min(1, "PASSWORD_REQUIRED"),
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
