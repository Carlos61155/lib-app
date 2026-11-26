-- CreateTable
CREATE TABLE "loans" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "student_id" TEXT,
    "professor_id" TEXT,
    "copy_id" TEXT NOT NULL,
    "librarian_id" TEXT NOT NULL,
    "loan_date" DATETIME NOT NULL,
    "due_date" DATETIME NOT NULL,
    "returned_at" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'IN_PROGRESS',
    "renewal_count" INTEGER NOT NULL DEFAULT 0,
    "loan_period_days_at_loan" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "loans_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "loans_professor_id_fkey" FOREIGN KEY ("professor_id") REFERENCES "professors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "loans_copy_id_fkey" FOREIGN KEY ("copy_id") REFERENCES "copies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "loans_librarian_id_fkey" FOREIGN KEY ("librarian_id") REFERENCES "librarians" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "loans_student_id_status_idx" ON "loans"("student_id", "status");

-- CreateIndex
CREATE INDEX "loans_professor_id_status_idx" ON "loans"("professor_id", "status");

-- CreateIndex
CREATE INDEX "loans_copy_id_status_idx" ON "loans"("copy_id", "status");

-- CreateIndex
CREATE INDEX "loans_librarian_id_created_at_idx" ON "loans"("librarian_id", "created_at");
