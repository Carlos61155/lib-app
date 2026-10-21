import { app, BrowserWindow, dialog, ipcMain, Menu } from "electron";
import { AuthService } from "./auth/auth.service";
import { applySqliteMigrations, initializeDatabase, prisma } from "./database";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { RegistrationService } from "./registration/registration.service";
import { AuthorService } from "./author/author.service";

const require = createRequire(import.meta.url);
const { config: loadDotEnv } = require("dotenv") as {
  config: (options: { path: string }) => { error?: Error };
};

const authService = new AuthService();
const registrationService = new RegistrationService();
const authorService = new AuthorService();

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
