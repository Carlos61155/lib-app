import { z } from "zod";

export const CreateLoanSchema = z
  .object({
    readerId: z.string().uuid("LOAN_READER_ID_INVALID"),
    readerType: z.enum(["STUDENT", "PROFESSOR"]),
    inventoryCode: z
      .string()
      .trim()
      .min(1, "LOAN_INVENTORY_CODE_REQUIRED")
      .max(40, "LOAN_INVENTORY_CODE_INVALID"),
  })
  .strict();

export type CreateLoanInput = z.infer<typeof CreateLoanSchema>;
