import { prisma } from "../../database";
import { UpdateLoanRuleSchema } from "./loan.rules.schemas";

export class LoanRuleService {
  async listRules() {
    return prisma.loanRule.findMany({
      orderBy: { profile: "asc" },
    });
  }

  async updateRule(input: unknown, librarianId: string) {
    const parsed = UpdateLoanRuleSchema.safeParse(input);

    if (!parsed.success) {
      throw new Error("LOAN_RULE_INPUT_INVALID");
    }

    const data = parsed.data;

    return prisma.$transaction(async (transaction) => {
      const currentRule = await transaction.loanRule.findUnique({
        where: { profile: data.profile },
      });

      if (!currentRule) {
        throw new Error("LOAN_RULE_NOT_FOUND");
      }

      const hasChanges =
        currentRule.loanPeriodDays !== data.loanPeriodDays ||
        currentRule.maxSimultaneousLoans !== data.maxSimultaneousLoans ||
        currentRule.maxRenewals !== data.maxRenewals ||
        currentRule.renewalPeriodDays !== data.renewalPeriodDays ||
        currentRule.blockingDaysPerOverdueDay !==
          data.blockingDaysPerOverdueDay;

      if (!hasChanges) {
        return currentRule;
      }

      await transaction.loanRule.update({
        where: { profile: data.profile },
        data: {
          loanPeriodDays: data.loanPeriodDays,
          maxSimultaneousLoans: data.maxSimultaneousLoans,
          maxRenewals: data.maxRenewals,
          renewalPeriodDays: data.renewalPeriodDays,
          blockingDaysPerOverdueDay: data.blockingDaysPerOverdueDay,
        },
      });

      await transaction.loanRuleChangeLog.create({
        data: {
          loanRuleId: currentRule.id,
          librarianId,
          previousValues: JSON.stringify({
            loanPeriodDays: currentRule.loanPeriodDays,
            maxSimultaneousLoans: currentRule.maxSimultaneousLoans,
            maxRenewals: currentRule.maxRenewals,
            renewalPeriodDays: currentRule.renewalPeriodDays,
            blockingDaysPerOverdueDay: currentRule.blockingDaysPerOverdueDay,
          }),
          newValues: JSON.stringify({
            loanPeriodDays: data.loanPeriodDays,
            maxSimultaneousLoans: data.maxSimultaneousLoans,
            maxRenewals: data.maxRenewals,
            renewalPeriodDays: data.renewalPeriodDays,
            blockingDaysPerOverdueDay: data.blockingDaysPerOverdueDay,
          }),
        },
      });

      return transaction.loanRule.findUniqueOrThrow({
        where: { profile: data.profile },
      });
    });
  }
}
