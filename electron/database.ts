import { createHash, randomUUID } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

export let prisma: PrismaClient;

export async function initializeDatabase(databaseUrl: string): Promise<void> {
  const adapter = new PrismaBetterSqlite3({ url: databaseUrl });
  prisma = new PrismaClient({ adapter });
  await prisma.$connect();
}

export async function applySqliteMigrations(
  migrationsDirectory: string,
): Promise<void> {
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "checksum" TEXT NOT NULL,
      "finished_at" DATETIME,
      "migration_name" TEXT NOT NULL,
      "logs" TEXT,
      "rolled_back_at" DATETIME,
      "started_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "applied_steps_count" INTEGER UNSIGNED NOT NULL DEFAULT 0
    )
  `);

  const migrationNames = (
    await readdir(migrationsDirectory, { withFileTypes: true })
  )
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const migrationName of migrationNames) {
    const sql = await readFile(
      path.join(migrationsDirectory, migrationName, "migration.sql"),
      "utf8",
    ).catch((error: unknown) => {
      if (
        error &&
        typeof error === "object" &&
        "code" in error &&
        error.code === "ENOENT"
      ) {
        return null;
      }
      throw error;
    });
    if (sql === null) continue;

    const checksum = createHash("sha256").update(sql).digest("hex");
    const applied = await prisma.$queryRaw<Array<{ checksum: string }>>`
      SELECT "checksum" FROM "_prisma_migrations"
      WHERE "migration_name" = ${migrationName} AND "finished_at" IS NOT NULL
    `;
    if (applied.length > 0) {
      // This migration's CPF backfill was corrected after release. Accept the
      // checksum from the original version for databases that already applied
      // it while empty; populated databases could not have completed it.
      const acceptedLegacyChecksum =
        migrationName === "20261018151416_add_cpf_and_professor_department" &&
        applied[0].checksum ===
          "d66836df46923ff4b5799cd260947de8d7c2b0afb8f65684f8b3ac9d087255a3";
      if (applied[0].checksum !== checksum && !acceptedLegacyChecksum) {
        throw new Error(`MIGRATION_CHECKSUM_MISMATCH:${migrationName}`);
      }
      continue;
    }

    const statements = sql
      .replace(/^\s*--.*$/gm, "")
      .split(";")
      .map((statement) => statement.trim())
      // SQLite ignores `PRAGMA foreign_keys = OFF` inside a transaction. Prisma's
      // table-rebuild migrations use it to temporarily remove FK checks, so the
      // actual safe equivalent here is deferred checking until transaction
      // commit. Keep the defer ON directive and discard the other migration
      // pragmas; SQLite resets this setting when the transaction ends.
      .filter(
        (statement) =>
          statement.length > 0 &&
          (!/^PRAGMA\b/i.test(statement) ||
            /^PRAGMA\s+defer_foreign_keys\s*=\s*ON$/i.test(statement)),
      );

    // Several Prisma SQLite migrations rebuild parent tables. SQLite's
    // `defer_foreign_keys` does not defer `RESTRICT` actions triggered by DROP
    // TABLE, so those migrations must run with FK enforcement disabled. The
    // pragma has no effect inside a transaction; set it before opening the
    // transaction and restore it after the migration has committed/rolled back.
    await prisma.$executeRawUnsafe("PRAGMA foreign_keys = OFF");
    try {
      await prisma.$transaction(async (transaction) => {
        for (const statement of statements) {
          await transaction.$executeRawUnsafe(statement);
        }
        await transaction.$executeRaw`
          INSERT INTO "_prisma_migrations"
            ("id", "checksum", "finished_at", "migration_name", "started_at", "applied_steps_count")
          VALUES
            (${randomUUID()}, ${checksum}, CURRENT_TIMESTAMP, ${migrationName}, CURRENT_TIMESTAMP, ${statements.length})
        `;
      });
    } finally {
      await prisma.$executeRawUnsafe("PRAGMA foreign_keys = ON");
    }

    const violations = await prisma.$queryRaw<
      Array<Record<string, unknown>>
    >`PRAGMA foreign_key_check`;
    if (violations.length > 0) {
      throw new Error(`MIGRATION_FOREIGN_KEY_CHECK_FAILED:${migrationName}`);
    }
  }
}
