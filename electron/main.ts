import { app, BrowserWindow, ipcMain } from "electron";
import { AuthService } from "./auth/auth.service";
import { fileURLToPath } from "node:url";
import path from "node:path";

const authService = new AuthService();

type UserSession = {
  userId: string;
  mustChangePassword: boolean;
};

const sessions = new Map<number, UserSession>();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
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

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
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
  const result = await authService.login(input);

  sessions.set(event.sender.id, {
    userId: result.user.id,
    mustChangePassword: result.user.mustChangePassword,
  });

  return result;
});

ipcMain.handle(
  "auth:change-password",
  async (
    event,
    input: {
      currentPassword: string;
      newPassword: string;
    },
  ) => {
    const session = sessions.get(event.sender.id);

    if (!session) {
      throw new Error("NOT_AUTHENTICATED");
    }

    await authService.changePassword(
      session.userId,
      input.currentPassword,
      input.newPassword,
    );

    session.mustChangePassword = false;

    return { success: true };
  },
);

app.whenReady().then(createWindow);
