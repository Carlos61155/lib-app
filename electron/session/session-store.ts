import { prisma } from "../database";

type UserSession = {
  userId: string;
  lastActivityAt: number;
};

const sessions = new Map<number, UserSession>();

export const SESSION_IDLE_TIMEOUT_MS = 15 * 60 * 1000;

export function getSession(senderId: number): UserSession | undefined {
  return sessions.get(senderId);
}

export function setSession(senderId: number, userId: string): void {
  sessions.set(senderId, { userId, lastActivityAt: Date.now() });
}

export function deleteSession(senderId: number): void {
  sessions.delete(senderId);
}

export async function requireActiveLibrarian(
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
    select: { id: true, isActive: true, mustChangePassword: true },
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
