import { ipcMain } from "electron";
import { requireActiveLibrarian } from "../session/session-store";
import { LoanRuleService } from "../loan/loan-rules/loan.rules.service";
import { LoanService } from "../loan/loan.service";

export function registerLoanHandlers(
  loanRuleService: LoanRuleService,
  loanService: LoanService,
): void {
  ipcMain.handle("loan-rules:list", async (event) => {
    await requireActiveLibrarian(event);
    return loanRuleService.listRules();
  });

  ipcMain.handle("loan-rules:update", async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    return loanRuleService.updateRule(input, librarianId);
  });

  ipcMain.handle("loan:create", async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    return loanService.createLoan(input, librarianId);
  });
}
