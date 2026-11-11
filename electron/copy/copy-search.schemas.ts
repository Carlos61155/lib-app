import z from "zod";

export const SearchCopiesSchema = z
  .object({
    inventoryCode: z.string().trim().min(1).optional(),
    status: z.string().trim().min(1).optional(),
    shelfLocation: z
      .string()
      .trim()
      .min(2, "SHELF_LOCATION_MIN_LENGTH")
      .optional(),
    conservationCondition: z.string().trim().min(1).optional(),
    bookId: z.string().uuid("BOOK_ID_INVALID").optional(),
  })
  .strict()
  .refine(
    (filters) =>
      Boolean(
        filters.inventoryCode ||
        filters.status ||
        filters.shelfLocation ||
        filters.conservationCondition ||
        filters.bookId,
      ),
    { message: "SEARCH_CRITERIA_REQUIRED" },
  );

export type SearchCopiesInput = z.infer<typeof SearchCopiesSchema>;
