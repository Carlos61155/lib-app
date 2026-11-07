-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "year_of_publication" INTEGER NOT NULL,
    "subTitle" TEXT,
    "edition" TEXT,
    "number_of_pages" INTEGER,
    "language" TEXT,
    "synopsis" TEXT,
    "cover_path" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "registration_book_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "book_id" TEXT NOT NULL,
    "created_by_librarian_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "registration_book_logs_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "registration_book_logs_created_by_librarian_id_fkey" FOREIGN KEY ("created_by_librarian_id") REFERENCES "librarians" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "book_authors" (
    "book_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,

    PRIMARY KEY ("book_id", "author_id"),
    CONSTRAINT "book_authors_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "book_authors_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "book_genres" (
    "book_id" TEXT NOT NULL,
    "genre_id" TEXT NOT NULL,

    PRIMARY KEY ("book_id", "genre_id"),
    CONSTRAINT "book_genres_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "book_genres_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "books_isbn_key" ON "books"("isbn");

-- CreateIndex
CREATE INDEX "registration_book_logs_book_id_idx" ON "registration_book_logs"("book_id");

-- CreateIndex
CREATE INDEX "registration_book_logs_created_by_librarian_id_created_at_idx" ON "registration_book_logs"("created_by_librarian_id", "created_at");

-- CreateIndex
CREATE INDEX "book_authors_author_id_idx" ON "book_authors"("author_id");

-- CreateIndex
CREATE INDEX "book_genres_genre_id_idx" ON "book_genres"("genre_id");
