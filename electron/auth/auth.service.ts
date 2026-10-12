import { prisma } from "../database";
import { AuthenticatedUser, LoginInput, LoginResult } from "./auth.types";
import { hashPassword, verifyPassword } from "./password.service";

const MAX_FAILED_ATTEMPTS = 3;
const LOCK_DURATION_MINUTES = 15;

function validateLoginInput(input: LoginInput): void {
  if (!input || typeof input !== "object") throw new Error("INVALID_INPUT");
  if (typeof input.accessCode !== "string" || !input.accessCode.trim()) {
    throw new Error("ACCESS_CODE_REQUIRED");
  }
  if (typeof input.password !== "string" || !input.password) {
    throw new Error("PASSWORD_REQUIRED");
  }
}

export class AuthService {
  async login(input: LoginInput): Promise<LoginResult> {
    validateLoginInput(input);
    const accessCode = input.accessCode.trim();
    const password = input.password;
    const user = await prisma.user.findUnique({ where: { accessCode } });

    if (!user) {
      await prisma.accessLog.create({
        data: { attemptedAccessCode: accessCode, success: false, failureReason: "INVALID_CREDENTIALS" },
      });
      if (await prisma.user.count() === 0) throw new Error("NO_CREDENTIALS_CONFIGURED");
      throw new Error("INVALID_CREDENTIALS");
    }

    const now = new Date();
    if (user.lockedUntil && user.lockedUntil > now) {
      await prisma.accessLog.create({
        data: { userId: user.id, attemptedAccessCode: accessCode, success: false, failureReason: "ACCOUNT_LOCKED" },
      });
      throw new Error(`ACCOUNT_LOCKED:${user.lockedUntil.toISOString()}`);
    }

    if (!user.isActive) {
      await prisma.accessLog.create({
        data: { userId: user.id, attemptedAccessCode: accessCode, success: false, failureReason: "ACCOUNT_INACTIVE" },
      });
      throw new Error("ACCOUNT_UNAVAILABLE");
    }

    if (!(await verifyPassword(password, user.passwordHash))) {
      // The compare-and-swap avoids losing increments when login attempts overlap.
      for (let attempt = 0; attempt < 5; attempt += 1) {
        const latest = await prisma.user.findUnique({ where: { id: user.id } });
        if (!latest) throw new Error("ACCOUNT_UNAVAILABLE");
        const currentTime = new Date();
        if (latest.lockedUntil && latest.lockedUntil > currentTime) {
          await prisma.accessLog.create({
            data: { userId: user.id, attemptedAccessCode: accessCode, success: false, failureReason: "ACCOUNT_LOCKED" },
          });
          throw new Error(`ACCOUNT_LOCKED:${latest.lockedUntil.toISOString()}`);
        }
        const currentAttempts = latest.lockedUntil && latest.lockedUntil <= currentTime
          ? 0
          : latest.failedLoginAttempts;
        const failedAttempts = currentAttempts + 1;
        const lockedUntil = failedAttempts >= MAX_FAILED_ATTEMPTS
          ? new Date(currentTime.getTime() + LOCK_DURATION_MINUTES * 60_000)
          : null;
        const changed = await prisma.user.updateMany({
          where: { id: user.id, failedLoginAttempts: latest.failedLoginAttempts, lockedUntil: latest.lockedUntil },
          data: { failedLoginAttempts: failedAttempts, lastFailedLoginAt: currentTime, lockedUntil },
        });
        if (changed.count === 1) {
          await prisma.accessLog.create({
            data: { userId: user.id, attemptedAccessCode: accessCode, success: false, failureReason: "INVALID_CREDENTIALS" },
          });
          throw new Error(lockedUntil
            ? `ACCOUNT_LOCKED:${lockedUntil.toISOString()}`
            : "INVALID_CREDENTIALS");
        }
      }
      throw new Error("LOGIN_RETRY_REQUIRED");
    }

    const authenticatedUser: AuthenticatedUser = {
      id: user.id,
      name: user.name,
      accessCode: user.accessCode,
      role: user.role,
      mustChangePassword: user.mustChangePassword,
    };

    await prisma.$transaction([
      prisma.user.update({ where: { id: user.id }, data: { failedLoginAttempts: 0, lockedUntil: null } }),
      prisma.accessLog.create({
        data: { userId: user.id, attemptedAccessCode: accessCode, success: true, failureReason: null },
      }),
    ]);
    return { user: authenticatedUser };
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<void> {
    if (typeof currentPassword !== "string" || !currentPassword || typeof newPassword !== "string" || !newPassword) {
      throw new Error("PASSWORD_REQUIRED");
    }
    if (newPassword.length < 12) throw new Error("PASSWORD_TOO_SHORT");

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.isActive) throw new Error("ACCOUNT_UNAVAILABLE");
    if (!(await verifyPassword(currentPassword, user.passwordHash))) {
      throw new Error("INVALID_CURRENT_PASSWORD");
    }
    if (await verifyPassword(newPassword, user.passwordHash)) {
      throw new Error("PASSWORD_MUST_BE_DIFFERENT");
    }

    const newPasswordHash = await hashPassword(newPassword);
    await prisma.user.update({
      where: { id: user.id },
      data: { passwordHash: newPasswordHash, mustChangePassword: false, failedLoginAttempts: 0, lockedUntil: null },
    });
  }
}
