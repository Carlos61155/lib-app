import { z } from "zod";

export const LoanProfileSchema = z.enum(["STUDENT", "PROFESSOR"]);
const MAX_LOAN_PERIOD_DAYS = 60;
const MAX_SIMULTANEOUS_LOANS = 5;
const MAX_RENEWALS = 4;
const MAX_RENEWAL_PERIOD_DAYS = 30;
const MAX_BLOCKING_DAYS_PER_OVERDUE_DAY = 90;

export const UpdateLoanRuleSchema = z
  .object({
    profile: LoanProfileSchema,
    loanPeriodDays: z
      .number()
      .int()
      .min(1, "LOAN_PERIOD_DAYS_INVALID")
      .max(MAX_LOAN_PERIOD_DAYS),
    maxSimultaneousLoans: z
      .number()
      .int()
      .min(1, "MAX_SIMULTANEOUS_LOANS_INVALID")
      .max(MAX_SIMULTANEOUS_LOANS),
    maxRenewals: z
      .number()
      .int()
      .min(0, "MAX_RENEWALS_INVALID")
      .max(MAX_RENEWALS),
    renewalPeriodDays: z
      .number()
      .int()
      .min(1, "RENEWAL_PERIOD_DAYS_INVALID")
      .max(MAX_RENEWAL_PERIOD_DAYS),
    blockingDaysPerOverdueDay: z
      .number()
      .int()
      .min(0, "BLOCKING_DAYS_PER_OVERDUE_DAY_INVALID")
      .max(MAX_BLOCKING_DAYS_PER_OVERDUE_DAY),
  })
  .strict();

export type UpdateLoanRuleInput = z.infer<typeof UpdateLoanRuleSchema>;
