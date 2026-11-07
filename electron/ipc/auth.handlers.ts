import { ipcMain } from "electron";
import { prisma } from "../database";
import { AuthService } from "../auth/auth.service";
import {
  deleteSession,
  getSession,
  SESSION_IDLE_TIMEOUT_MS,
  setSession,
} from "../session/session-store";

export function registerAuthHandlers(authService: AuthService): void {
  function assertMainFrame(event: Electron.IpcMainInvokeEvent): void {
    if (event.senderFrame !== event.sender.mainFrame) {
      throw new Error("UNAUTHORIZED");
    }
  }

  ipcMain.handle("auth:login", async (event, input: unknown) => {
    assertMainFrame(event);
    const result = await authService.login(input);
    setSession(event.sender.id, result.user.id);
    return result;
  });

  ipcMain.handle("auth:get-session", async (event) => {
    assertMainFrame(event);
    const session = getSession(event.sender.id);
    if (!session) return null;

    if (Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS) {
      deleteSession(event.sender.id);
      return null;
    }

    const user = await prisma.librarian.findUnique({
      where: { id: session.userId },
      include: { person: true },
    });

    if (!user || !user.isActive) {
      deleteSession(event.sender.id);
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
    assertMainFrame(event);
    deleteSession(event.sender.id);
    return { success: true };
  });

  ipcMain.handle("auth:activity", (event) => {
    assertMainFrame(event);
    const session = getSession(event.sender.id);

    if (
      !session ||
      Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS
    ) {
      deleteSession(event.sender.id);
      return false;
    }

    session.lastActivityAt = Date.now();
    return true;
  });

  ipcMain.handle("auth:change-password", async (event, input: unknown) => {
    assertMainFrame(event);
    const session = getSession(event.sender.id);

    if (!session) {
      throw new Error("NOT_AUTHENTICATED");
    }

    if (Date.now() - session.lastActivityAt >= SESSION_IDLE_TIMEOUT_MS) {
      deleteSession(event.sender.id);
      throw new Error("SESSION_EXPIRED");
    }

    await authService.changePassword(session.userId, input);
    session.lastActivityAt = Date.now();
    return { success: true };
  });
}
