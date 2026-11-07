import { LoanProfile } from "../../generated/prisma/enums";
import type { PrismaClient } from "../../generated/prisma/client";

const INITIAL_LOAN_RULES = [
  {
    profile: LoanProfile.STUDENT,
    loanPeriodDays: 30,
    maxSimultaneousLoans: 3,
    maxRenewals: 2,
    renewalPeriodDays: 15,
    blockingDaysPerOverdueDay: 2,
  },
  {
    profile: LoanProfile.PROFESSOR,
    loanPeriodDays: 60,
    maxSimultaneousLoans: 5,
    maxRenewals: 4,
    renewalPeriodDays: 30,
    blockingDaysPerOverdueDay: 2,
  },
];

export async function ensureDefaultLoanRules(
  client: PrismaClient,
): Promise<void> {
  await client.$transaction(async (transaction) => {
    for (const rule of INITIAL_LOAN_RULES) {
      await transaction.loanRule.upsert({
        where: { profile: rule.profile },
        create: rule,
        update: {},
      });
    }
  });
}
