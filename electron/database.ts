import { app } from "electron";
import { createRequire } from "node:module";
import path from "node:path";
import { PrismaClient } from "./generated/prisma/client";

const require = createRequire(import.meta.url);
const { config: loadEnv } = require("dotenv") as {
  config: (options?: { path?: string }) => { error?: Error };
};

loadEnv({ path: path.join(app.getPath("userData"), ".env") });
loadEnv();

export const prisma = new PrismaClient();
