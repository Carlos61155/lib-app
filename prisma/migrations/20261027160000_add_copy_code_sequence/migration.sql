CREATE TABLE "copy_code_sequences" (
    "id" INTEGER NOT NULL PRIMARY KEY DEFAULT 1,
    "last_value" INTEGER NOT NULL DEFAULT 0
);

INSERT INTO "copy_code_sequences" ("id", "last_value")
SELECT 1, COALESCE(MAX(CAST("inventory_code" AS INTEGER)), 0)
FROM "copies"
WHERE "inventory_code" <> ''
  AND "inventory_code" NOT GLOB '*[^0-9]*';
