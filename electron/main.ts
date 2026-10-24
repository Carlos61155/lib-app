import { app, BrowserWindow, dialog, ipcMain, Menu } from "electron";
import { AuthService } from "./auth/auth.service";
import { applySqliteMigrations, initializeDatabase, prisma } from "./database";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { RegistrationService } from "./registration/registration.service";
import { AuthorService } from "./author/author.service";
import { GenreService } from "./genre/genre.service";
import { BookService } from "./book/book.service";
import { randomUUID } from "node:crypto";
import { readFile, stat, writeFile, unlink } from "node:fs/promises";

const require = createRequire(import.meta.url);
const { config: loadDotEnv } = require("dotenv") as {
  config: (options: { path: string }) => { error?: Error };
};

const authService = new AuthService();
const registrationService = new RegistrationService();
const authorService = new AuthorService();
const genreService = new GenreService();
const bookService = new BookService();

type StagedBookCover = {
  token: string;
  librarianId: string;
  bytes: Buffer;
  extension: "jpg" | "png" | "webp";
  mimeType: "image/jpeg" | "image/png" | "image/webp";
};

const stagedBookCovers = new Map<number, StagedBookCover>();
const MAX_BOOK_COVER_BYTES = 5 * 1024 * 1024;

type UserSession = {
  userId: string;
  lastActivityAt: number;
};

const sessions = new Map<number, UserSession>();
const SESSION_IDLE_TIMEOUT_MS = 15 * 60 * 1000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function requireActiveLibrarian(
  event: Electron.IpcMainInvokeEvent,
): Promise<string> {
  if (event.senderFrame !== event.sender.mainFrame) {
    throw new Error("UNAUTHORIZED");
  }

  const session = sessions.get(event.sender.id);

  if (!session) {
    throw new Error("NOT_AUTHENTICATED");
  }

  if (Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS) {
    sessions.delete(event.sender.id);
    throw new Error("SESSION_EXPIRED");
  }

  const librarian = await prisma.librarian.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      isActive: true,
      mustChangePassword: true,
    },
  });

  if (!librarian || !librarian.isActive) {
    sessions.delete(event.sender.id);
    throw new Error("ACCOUNT_UNAVAILABLE");
  }

  if (librarian.mustChangePassword) {
    throw new Error("PASSWORD_CHANGE_REQUIRED");
  }

  session.lastActivityAt = Date.now();

  return librarian.id;
}

function toSqliteFileUrl(absolutePath: string): string {
  // Keep SQLite paths in Prisma connection-string form on both Windows and Linux.
  return `file:${absolutePath.replace(/\\/g, "/")}`;
}

function resolveDevelopmentDatabaseUrl(databaseUrl: string): string {
  if (!databaseUrl.startsWith("file:")) return databaseUrl;

  const fileUrl = databaseUrl.slice("file:".length);
  const queryIndex = fileUrl.indexOf("?");
  const databasePath =
    queryIndex === -1 ? fileUrl : fileUrl.slice(0, queryIndex);
  const query = queryIndex === -1 ? "" : fileUrl.slice(queryIndex);
  const absolutePath = path.isAbsolute(databasePath)
    ? databasePath
    : path.resolve(app.getAppPath(), databasePath);

  return `${toSqliteFileUrl(absolutePath)}${query}`;
}

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, "..");

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    title: "Libapp",
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  const windowId = win.webContents.id;

  win.on("closed", () => {
    sessions.delete(windowId);
    win = null;
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}

function detectBookCoverType(bytes: Buffer): {
  extension: "jpg" | "png" | "webp";
  mimeType: "image/jpeg" | "image/png" | "image/webp";
} | null {
  if (
    bytes.length >= 8 &&
    bytes
      .subarray(0, 8)
      .equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
  ) {
    return { extension: "png", mimeType: "image/png" };
  }

  if (
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff
  ) {
    return { extension: "jpg", mimeType: "image/jpeg" };
  }

  if (
    bytes.length >= 12 &&
    bytes.toString("ascii", 0, 4) === "RIFF" &&
    bytes.toString("ascii", 8, 12) === "WEBP"
  ) {
    return { extension: "webp", mimeType: "image/webp" };
  }

  return null;
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle("auth:login", async (event, input) => {
  if (event.senderFrame !== event.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const result = await authService.login(input);

  sessions.set(event.sender.id, {
    userId: result.user.id,
    lastActivityAt: Date.now(),
  });

  return result;
});

ipcMain.handle("auth:get-session", async (event) => {
  if (event.senderFrame !== event.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const session = sessions.get(event.sender.id);
  if (!session) return null;
  if (Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS) {
    sessions.delete(event.sender.id);
    return null;
  }
  const user = await prisma.librarian.findUnique({
    where: { id: session.userId },
    include: { person: true },
  });
  if (!user || !user.isActive) {
    sessions.delete(event.sender.id);
    return null;
  }
  session.lastActivityAt = Date.now();
  return {
    user: {
      id: user.id,
      name: user.person.name,
      role: "BIBLIOTECARIO",
      mustChangePassword: user.mustChangePassword,
    },
    idleTimeoutMs: SESSION_IDLE_TIMEOUT_MS,
  };
});

ipcMain.handle("auth:logout", (event) => {
  sessions.delete(event.sender.id);
  return { success: true };
});

ipcMain.handle("auth:activity", (event) => {
  if (event.senderFrame !== event.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const session = sessions.get(event.sender.id);
  if (
    !session ||
    Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS
  ) {
    sessions.delete(event.sender.id);
    return false;
  }
  session.lastActivityAt = Date.now();
  return true;
});

ipcMain.handle("auth:change-password", async (event, input: unknown) => {
  if (event.senderFrame !== event.sender.mainFrame)
    throw new Error("UNAUTHORIZED");
  const session = sessions.get(event.sender.id);

  if (!session) {
    throw new Error("NOT_AUTHENTICATED");
  }

  if (Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS) {
    sessions.delete(event.sender.id);
    throw new Error("SESSION_EXPIRED");
  }

  await authService.changePassword(session.userId, input);

  session.lastActivityAt = Date.now();

  return { success: true };
});

ipcMain.handle("registration:create-student", async (event, input: unknown) => {
  const librarianId = await requireActiveLibrarian(event);
  return registrationService.createStudent(input, librarianId);
});

ipcMain.handle(
  "registration:create-professor",
  async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    return registrationService.createProfessor(input, librarianId);
  },
);

ipcMain.handle(
  "registration:create-librarian",
  async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    return registrationService.createLibrarian(input, librarianId);
  },
);

ipcMain.handle("author:create", async (event, input: unknown) => {
  const librarianId = await requireActiveLibrarian(event);
  return authorService.createAuthor(input, librarianId);
});

ipcMain.handle("genre:create", async (event, input: unknown) => {
  const librarianId = await requireActiveLibrarian(event);
  return genreService.createGenre(input, librarianId);
});

ipcMain.handle("book:create", async (event, input: unknown) => {
  const librarianId = await requireActiveLibrarian(event);

  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    throw new Error("BOOK_INPUT_INVALID");
  }

  const bookInput = { ...(input as Record<string, unknown>) };
  const coverToken = bookInput.coverToken;
  delete bookInput.coverToken;

  let stagedCover: StagedBookCover | undefined;

  if (coverToken !== undefined) {
    if (typeof coverToken !== "string") {
      throw new Error("BOOK_COVER_TOKEN_INVALID");
    }

    const candidate = stagedBookCovers.get(event.sender.id);

    if (
      !candidate ||
      candidate.token !== coverToken ||
      candidate.librarianId !== librarianId
    ) {
      throw new Error("BOOK_COVER_TOKEN_INVALID");
    }

    stagedCover = candidate;
  }

  let relativeCoverPath: string | undefined;
  let absoluteCoverPath: string | undefined;

  try {
    if (stagedCover) {
      const coverDirectory = path.join(app.getPath("userData"), "book-covers");
      const fileName = `${randomUUID()}.${stagedCover.extension}`;

      await mkdir(coverDirectory, { recursive: true });

      absoluteCoverPath = path.join(coverDirectory, fileName);
      relativeCoverPath = path.posix.join("book-covers", fileName);

      await writeFile(absoluteCoverPath, stagedCover.bytes, { flag: "wx" });
    }

    const book = await bookService.createBook(
      bookInput,
      librarianId,
      relativeCoverPath,
    );

    if (stagedCover) {
      stagedBookCovers.delete(event.sender.id);
    }

    return book;
  } catch (error) {
    if (absoluteCoverPath) {
      await unlink(absoluteCoverPath).catch(() => undefined);
    }

    throw error;
  }
});

ipcMain.handle("book:discard-cover", async (event, token: unknown) => {
  const librarianId = await requireActiveLibrarian(event);
  const staged = stagedBookCovers.get(event.sender.id);

  if (staged && staged.token === token && staged.librarianId === librarianId) {
    stagedBookCovers.delete(event.sender.id);
  }

  return { success: true };
});

ipcMain.handle("book:select-cover", async (event) => {
  const librarianId = await requireActiveLibrarian(event);

  const selection = await dialog.showOpenDialog({
    title: "Selecionar capa do livro",
    properties: ["openFile"],
    filters: [
      {
        name: "Imagens",
        extensions: ["jpg", "jpeg", "png", "webp"],
      },
    ],
  });

  if (selection.canceled || selection.filePaths.length === 0) {
    return null;
  }

  const sourcePath = selection.filePaths[0];
  const fileInfo = await stat(sourcePath);

  if (fileInfo.size > MAX_BOOK_COVER_BYTES) {
    throw new Error("BOOK_COVER_TOO_LARGE");
  }

  const bytes = await readFile(sourcePath);

  if (bytes.length > MAX_BOOK_COVER_BYTES) {
    throw new Error("BOOK_COVER_TOO_LARGE");
  }

  const imageType = detectBookCoverType(bytes);

  if (!imageType) {
    throw new Error("BOOK_COVER_FORMAT_INVALID");
  }

  const token = randomUUID();

  stagedBookCovers.set(event.sender.id, {
    token,
    librarianId,
    bytes,
    ...imageType,
  });

  return {
    token,
    fileName: path.basename(sourcePath),
    previewDataUrl: `data:${imageType.mimeType};base64,${bytes.toString("base64")}`,
  };
});

app
  .whenReady()
  .then(async () => {
    Menu.setApplicationMenu(null);

    const provisioningEnvPath = app.isPackaged
      ? path.join(app.getPath("userData"), ".env")
      : path.join(app.getAppPath(), ".env");
    loadDotEnv({ path: provisioningEnvPath });

    const configuredDatabaseUrl = process.env.DATABASE_URL;
    const packagedDatabasePath = path.join(
      app.getPath("userData"),
      "lib-app.db",
    );
    const databaseUrl = app.isPackaged
      ? toSqliteFileUrl(packagedDatabasePath)
      : configuredDatabaseUrl
        ? resolveDevelopmentDatabaseUrl(configuredDatabaseUrl)
        : configuredDatabaseUrl;

    if (!databaseUrl) {
      throw new Error("DATABASE_URL is required while running in development.");
    }

    if (app.isPackaged) {
      await mkdir(path.dirname(packagedDatabasePath), { recursive: true });
    } else if (configuredDatabaseUrl?.startsWith("file:")) {
      const databasePath = configuredDatabaseUrl
        .slice("file:".length)
        .split("?")[0];
      const absoluteDatabasePath = path.isAbsolute(databasePath)
        ? databasePath
        : path.resolve(app.getAppPath(), databasePath);
      await mkdir(path.dirname(absoluteDatabasePath), { recursive: true });
    }

    await initializeDatabase(databaseUrl);

    const migrationsDirectory = app.isPackaged
      ? path.join(app.getAppPath(), "prisma", "migrations")
      : path.resolve(app.getAppPath(), "prisma", "migrations");
    await applySqliteMigrations(migrationsDirectory);

    const librarianCreated = await authService.provisionInitialLibrarian({
      name: process.env.INITIAL_LIBRARIAN_NAME,
      email: process.env.INITIAL_LIBRARIAN_EMAIL,
      cpf: process.env.INITIAL_LIBRARIAN_CPF,
      accessCode: process.env.INITIAL_LIBRARIAN_ACCESS_CODE,
      password: process.env.INITIAL_LIBRARIAN_PASSWORD,
    });
    if (librarianCreated) {
      console.info(
        "Created the initial librarian account from the provisioning environment.",
      );
    }

    createWindow();
  })
  .catch((error: unknown) => {
    console.error("Failed to initialize the SQLite database:", error);
    const message = error instanceof Error ? error.message : String(error);
    const configurationError = message.startsWith("INITIAL_LIBRARIAN_");
    dialog.showErrorBox(
      "Biblioteca IFCE",
      configurationError
        ? `The database is empty and the initial librarian could not be created. Configure INITIAL_LIBRARIAN_NAME, INITIAL_LIBRARIAN_EMAIL,INITIAL_LIBRARIAN_CPF, INITIAL_LIBRARIAN_ACCESS_CODE, and INITIAL_LIBRARIAN_PASSWORD in ${app.isPackaged ? path.join(app.getPath("userData"), ".env") : path.join(app.getAppPath(), ".env")}. Restart the app after saving the file. (${message})`
        : `The application could not initialize its SQLite database. (${message})`,
    );
    app.quit();
  });
