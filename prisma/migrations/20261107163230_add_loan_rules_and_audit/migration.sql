-- CreateTable
CREATE TABLE "loan_rules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "profile" TEXT NOT NULL,
    "loan_period_days" INTEGER NOT NULL,
    "max_simultaneous_loans" INTEGER NOT NULL,
    "max_renewals" INTEGER NOT NULL,
    "renewal_period_days" INTEGER NOT NULL,
    "blocking_days_per_overdue_day" INTEGER NOT NULL DEFAULT 2,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "loan_rule_change_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "loan_rule_id" TEXT NOT NULL,
    "librarian_id" TEXT NOT NULL,
    "previous_values" TEXT NOT NULL,
    "new_values" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "loan_rule_change_logs_loan_rule_id_fkey" FOREIGN KEY ("loan_rule_id") REFERENCES "loan_rules" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "loan_rule_change_logs_librarian_id_fkey" FOREIGN KEY ("librarian_id") REFERENCES "librarians" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "loan_rules_profile_key" ON "loan_rules"("profile");

-- CreateIndex
CREATE INDEX "loan_rule_change_logs_loan_rule_id_created_at_idx" ON "loan_rule_change_logs"("loan_rule_id", "created_at");

-- CreateIndex
CREATE INDEX "loan_rule_change_logs_librarian_id_created_at_idx" ON "loan_rule_change_logs"("librarian_id", "created_at");
