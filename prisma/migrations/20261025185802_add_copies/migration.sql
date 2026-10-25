-- CreateTable
CREATE TABLE "copies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "inventory_code" TEXT NOT NULL,
    "book_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
    "shelf_location" TEXT,
    "conservation_condition" TEXT,
    "acquisition_date" DATETIME,
    "acquisition_method" TEXT,
    "registration_log_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "copies_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "copies_registration_log_id_fkey" FOREIGN KEY ("registration_log_id") REFERENCES "copy_registration_logs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "copy_registration_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "book_id" TEXT NOT NULL,
    "created_by_librarian_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "copy_registration_logs_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "copy_registration_logs_created_by_librarian_id_fkey" FOREIGN KEY ("created_by_librarian_id") REFERENCES "librarians" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "copies_inventory_code_key" ON "copies"("inventory_code");

-- CreateIndex
CREATE INDEX "copies_book_id_status_idx" ON "copies"("book_id", "status");

-- CreateIndex
CREATE INDEX "copies_registration_log_id_idx" ON "copies"("registration_log_id");

-- CreateIndex
CREATE INDEX "copy_registration_logs_book_id_created_at_idx" ON "copy_registration_logs"("book_id", "created_at");

-- CreateIndex
CREATE INDEX "copy_registration_logs_created_by_librarian_id_created_at_idx" ON "copy_registration_logs"("created_by_librarian_id", "created_at");
