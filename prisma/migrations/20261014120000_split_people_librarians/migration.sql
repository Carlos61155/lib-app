CREATE TABLE "people" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

CREATE UNIQUE INDEX "people_email_key" ON "people"("email");

CREATE TABLE "librarians" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "person_id" TEXT NOT NULL,
    "access_code" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "must_change_password" BOOLEAN NOT NULL DEFAULT true,
    "failed_login_attempts" INTEGER NOT NULL DEFAULT 0,
    "last_failed_login_at" DATETIME,
    "locked_until" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "librarians_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "librarians_person_id_key" ON "librarians"("person_id");
CREATE UNIQUE INDEX "librarians_access_code_key" ON "librarians"("access_code");

INSERT INTO "people" ("id", "name", "email", "created_at", "updated_at")
SELECT "id", "name", "email", "created_at", "updated_at" FROM "users";

INSERT INTO "librarians" (
    "id", "person_id", "access_code", "password_hash", "is_active",
    "must_change_password", "failed_login_attempts", "last_failed_login_at",
    "locked_until", "created_at", "updated_at"
)
SELECT
    "id", "id", "accessCode", "password_hash", "is_active",
    "must_change_password", "failed_login_attempts", "last_failed_login_at",
    "locked_until", "created_at", "updated_at"
FROM "users";

CREATE TABLE "access_logs_new" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "librarian_id" TEXT,
    "attempted_access_code" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL,
    "failure_reason" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "access_logs_librarian_id_fkey" FOREIGN KEY ("librarian_id") REFERENCES "librarians" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO "access_logs_new" (
    "id", "librarian_id", "attempted_access_code", "success", "failure_reason", "created_at"
)
SELECT "id", "user_id", "attempted_access_code", "success", "failure_reason", "created_at"
FROM "access_logs";

DROP TABLE "access_logs";
ALTER TABLE "access_logs_new" RENAME TO "access_logs";

CREATE TABLE "students" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "person_id" TEXT NOT NULL,
    "registration_number" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "students_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "students_person_id_key" ON "students"("person_id");
CREATE UNIQUE INDEX "students_registration_number_key" ON "students"("registration_number");

CREATE TABLE "professors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "person_id" TEXT NOT NULL,
    "registration_number" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "professors_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "professors_person_id_key" ON "professors"("person_id");
CREATE UNIQUE INDEX "professors_registration_number_key" ON "professors"("registration_number");

CREATE TABLE "registration_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "person_id" TEXT NOT NULL,
    "created_by_librarian_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "registration_logs_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "registration_logs_created_by_librarian_id_fkey" FOREIGN KEY ("created_by_librarian_id") REFERENCES "librarians" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "registration_logs_person_id_idx" ON "registration_logs"("person_id");
CREATE INDEX "registration_logs_created_by_librarian_id_created_at_idx" ON "registration_logs"("created_by_librarian_id", "created_at");

INSERT INTO "registration_logs" ("id", "person_id", "created_by_librarian_id", "created_at")
SELECT 'legacy-registration-' || "id", "id", NULL, "created_at" FROM "users";

DROP TABLE "users";
