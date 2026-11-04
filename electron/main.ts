import { app, BrowserWindow, dialog, Menu } from "electron";
import { AuthService } from "./auth/auth.service";
import { applySqliteMigrations, initializeDatabase } from "./database";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { RegistrationService } from "./registration/registration.service";
import { AuthorService } from "./author/author.service";
import { GenreService } from "./genre/genre.service";
import { BookService } from "./book/book.service";
import { CopyService } from "./copy/copy.service";
import { registerAuthHandlers } from "./ipc/auth.handlers";
import { registerRegistrationHandlers } from "./ipc/registration.handlers";
import { registerAuthorHandlers } from "./ipc/author.handlers";
import { registerGenreHandlers } from "./ipc/genre.handlers";
import { registerBookHandlers } from "./ipc/book.handlers";
import { registerCopyHandlers } from "./ipc/copy.handlers";
import { deleteSession } from "./session/session-store";

const require = createRequire(import.meta.url);
const { config: loadDotEnv } = require("dotenv") as {
  config: (options: { path: string }) => { error?: Error };
};

const authService = new AuthService();
const registrationService = new RegistrationService();
const authorService = new AuthorService();
const genreService = new GenreService();
const bookService = new BookService();
const copyService = new CopyService();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  win.maximize();

  const windowId = win.webContents.id;

  win.on("closed", () => {
    deleteSession(windowId);
    win = null;
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
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

registerAuthHandlers(authService);
registerRegistrationHandlers(registrationService);
registerAuthorHandlers(authorService);
registerGenreHandlers(genreService);
registerBookHandlers(bookService);
registerCopyHandlers(copyService);

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
