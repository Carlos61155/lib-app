/*
  Warnings:

  - You are about to drop the column `department` on the `professors` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_professors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "person_id" TEXT NOT NULL,
    "registration_number" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "professors_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_professors" ("created_at", "id", "is_active", "person_id", "registration_number", "updated_at") SELECT "created_at", "id", "is_active", "person_id", "registration_number", "updated_at" FROM "professors";
DROP TABLE "professors";
ALTER TABLE "new_professors" RENAME TO "professors";
CREATE UNIQUE INDEX "professors_person_id_key" ON "professors"("person_id");
CREATE UNIQUE INDEX "professors_registration_number_key" ON "professors"("registration_number");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
