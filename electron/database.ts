import { createHash, randomUUID } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { PrismaClient } from "./generated/prisma/client";

export let prisma: PrismaClient;

export async function initializeDatabase(databaseUrl: string): Promise<void> {
  prisma = new PrismaClient({ datasourceUrl: databaseUrl });
  await prisma.$connect();
}

export async function applySqliteMigrations(migrationsDirectory: string): Promise<void> {
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

  const migrationNames = (await readdir(migrationsDirectory, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const migrationName of migrationNames) {
    const sql = await readFile(
      path.join(migrationsDirectory, migrationName, "migration.sql"),
      "utf8",
    ).catch((error: unknown) => {
      if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
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
      if (applied[0].checksum !== checksum) {
        throw new Error(`MIGRATION_CHECKSUM_MISMATCH:${migrationName}`);
      }
      continue;
    }

    const statements = sql
      .replace(/^\s*--.*$/gm, "")
      .split(";")
      .map((statement) => statement.trim())
      .filter((statement) => statement.length > 0 && !/^PRAGMA\b/i.test(statement));

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
  }
}
