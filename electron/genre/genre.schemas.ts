import z from "zod";

export const CreateGenreSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "NAME_MIN_LENGTH")
      .max(50, "NAME_MAX_LENGTH")
      .regex(/\p{L}/u, "NAME_MUST_CONTAIN_A_LETTER"),
    description: z.string().trim().max(240).optional(),
  })
  .strict();
