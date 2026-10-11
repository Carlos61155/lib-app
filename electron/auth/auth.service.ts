import { prisma } from "../database";
import { AuthenticatedUser, LoginInput, LoginResult } from "./auth.types";
import { hashPassword, verifyPassword } from "./password.service";

const MAX_FAILED_ATTEMPTS = 3;
const LOCK_DURATION_MINUTES = 15;

export class AuthService {
  async login(input: LoginInput): Promise<LoginResult> {
    const { accessCode, password } = input;

    const user = await prisma.user.findUnique({
      where: {
        accessCode: accessCode,
      },
    });

    if (!user) {
      await prisma.accessLog.create({
        data: {
          attemptedAccessCode: accessCode,
          success: false,
          failureReason: "INVALID_CREDENTIALS",
        },
      });

      throw new Error("INVALID_CREDENTIALS");
    }

    const now = new Date();

    if (user.lockedUntil && user.lockedUntil > now) {
      await prisma.accessLog.create({
        data: {
          userId: user.id,
          attemptedAccessCode: accessCode,
          success: false,
          failureReason: "ACCOUNT_LOCKED",
        },
      });

      throw new Error("ACCOUNT_LOCKED");
    }

    const lockExpired = user.lockedUntil !== null && user.lockedUntil <= now;

    if (lockExpired) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          failedLoginAttempts: 0,
          lockedUntil: null,
        },
      });
    }

    if (!user.isActive) {
      await prisma.accessLog.create({
        data: {
          userId: user.id,
          attemptedAccessCode: accessCode,
          success: false,
          failureReason: "ACCOUNT_INACTIVE",
        },
      });

      throw new Error("ACCOUNT_INACTIVE");
    }

    const passwordMatches = await verifyPassword(password, user.passwordHash);

    if (!passwordMatches) {
      const currentAttempts = lockExpired ? 0 : user.failedLoginAttempts;

      const failedAttempts = currentAttempts + 1;

      const shouldLock = failedAttempts >= MAX_FAILED_ATTEMPTS;

      const lockedUntil = shouldLock
        ? new Date(Date.now() + LOCK_DURATION_MINUTES * 60 * 1000)
        : null;

      await prisma.$transaction([
        prisma.user.update({
          where: { id: user.id },
          data: {
            failedLoginAttempts: failedAttempts,
            lockedUntil,
          },
        }),
        prisma.accessLog.create({
          data: {
            userId: user.id,
            attemptedAccessCode: accessCode,
            success: false,
            failureReason: "INVALID_CREDENTIALS",
          },
        }),
      ]);

      throw new Error("INVALID_CREDENTIALS");
    }

    const authenticatedUser: AuthenticatedUser = {
      id: user.id,
      name: user.name,
      accessCode: user.accessCode,
      role: user.role,
      mustChangePassword: user.mustChangePassword,
    };

    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: {
          failedLoginAttempts: 0,
          lockedUntil: null,
        },
      }),
      prisma.accessLog.create({
        data: {
          userId: user.id,
          attemptedAccessCode: accessCode,
          success: true,
          failureReason: null,
        },
      }),
    ]);

    return {
      user: authenticatedUser,
    };
  }

  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ): Promise<void> {
    if (!newPassword || newPassword.length < 12) {
      throw new Error("PASSWORD_TOO_SHORT");
    }

    if (currentPassword === newPassword) {
      throw new Error("PASSWORD_MUST_BE_DIFFERENT");
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user || !user.isActive) {
      throw new Error("ACCOUNT_UNAVAILABLE");
    }

    const currentPasswordMatches = await verifyPassword(
      currentPassword,
      user.passwordHash,
    );

    if (!currentPasswordMatches) {
      throw new Error("INVALID_CURRENT_PASSWORD");
    }

    const newPasswordHash = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash: newPasswordHash,
        mustChangePassword: false,
        failedLoginAttempts: 0,
        lockedUntil: null,
      },
    });
  }
}
