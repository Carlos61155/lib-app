-- CreateTable
CREATE TABLE "genres" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "registration_genre_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "genre_id" TEXT NOT NULL,
    "created_by_librarian_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "registration_genre_logs_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "registration_genre_logs_created_by_librarian_id_fkey" FOREIGN KEY ("created_by_librarian_id") REFERENCES "librarians" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- CreateIndex
CREATE INDEX "registration_genre_logs_genre_id_idx" ON "registration_genre_logs"("genre_id");

-- CreateIndex
CREATE INDEX "registration_genre_logs_created_by_librarian_id_created_at_idx" ON "registration_genre_logs"("created_by_librarian_id", "created_at");
