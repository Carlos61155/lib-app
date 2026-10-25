/*
  Warnings:

  - Added the required column `cpf` to the `people` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `professors` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_people" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_people" ("created_at", "email", "id", "name", "updated_at") SELECT "created_at", "email", "id", "name", "updated_at" FROM "people";
DROP TABLE "people";
ALTER TABLE "new_people" RENAME TO "people";
CREATE UNIQUE INDEX "people_cpf_key" ON "people"("cpf");
CREATE UNIQUE INDEX "people_email_key" ON "people"("email");
CREATE TABLE "new_professors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "person_id" TEXT NOT NULL,
    "department" TEXT NOT NULL,
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
