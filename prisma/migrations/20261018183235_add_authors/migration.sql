-- CreateTable
CREATE TABLE "authors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "pseudonym" TEXT,
    "date_of_birth" DATETIME,
    "date_of_death" DATETIME,
    "biography" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "registration_author_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "author_id" TEXT NOT NULL,
    "created_by_librarian_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "registration_author_logs_author_id_idx" ON "registration_author_logs"("author_id");

-- CreateIndex
CREATE INDEX "registration_author_logs_created_by_librarian_id_created_at_idx" ON "registration_author_logs"("created_by_librarian_id", "created_at");
