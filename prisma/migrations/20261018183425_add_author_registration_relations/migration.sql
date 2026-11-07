/*
  Warnings:

  - Made the column `created_by_librarian_id` on table `registration_author_logs` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_registration_author_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "author_id" TEXT NOT NULL,
    "created_by_librarian_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "registration_author_logs_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "registration_author_logs_created_by_librarian_id_fkey" FOREIGN KEY ("created_by_librarian_id") REFERENCES "librarians" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_registration_author_logs" ("author_id", "created_at", "created_by_librarian_id", "id") SELECT "author_id", "created_at", "created_by_librarian_id", "id" FROM "registration_author_logs";
DROP TABLE "registration_author_logs";
ALTER TABLE "new_registration_author_logs" RENAME TO "registration_author_logs";
CREATE INDEX "registration_author_logs_author_id_idx" ON "registration_author_logs"("author_id");
CREATE INDEX "registration_author_logs_created_by_librarian_id_created_at_idx" ON "registration_author_logs"("created_by_librarian_id", "created_at");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
