import { prisma } from "../database";
import { ChangePasswordSchema, LoginSchema } from "./auth.schemas";
import { AuthenticatedUser, LoginResult } from "./auth.types";
import { hashPassword, verifyPassword } from "./password.service";

const MAX_FAILED_ATTEMPTS = 3;
const LOCK_DURATION_MINUTES = 15;

export class AuthService {
  async login(input: unknown): Promise<LoginResult> {
    const validate = LoginSchema.safeParse(input);

    if (!validate.success) {
      const invalidFields = new Set(
        validate.error.issues.map((issue) => issue.path[0]),
      );

      if (invalidFields.has("accessCode")) {
        throw new Error("ACCESS_CODE_REQUIRED");
      }

      if (invalidFields.has("password")) {
        throw new Error("PASSWORD_REQUIRED");
      }

      throw new Error("INVALID_INPUT");
    }

    const { accessCode, password } = validate.data;

    const user = await prisma.user.findUnique({ where: { accessCode } });

    if (!user) {
      await prisma.accessLog.create({
        data: {
          attemptedAccessCode: accessCode,
          success: false,
          failureReason: "INVALID_CREDENTIALS",
        },
      });
      if ((await prisma.user.count()) === 0)
        throw new Error("NO_CREDENTIALS_CONFIGURED");
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
      throw new Error(`ACCOUNT_LOCKED:${user.lockedUntil.toISOString()}`);
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
            data: {
              userId: user.id,
              attemptedAccessCode: accessCode,
              success: false,
              failureReason: "ACCOUNT_LOCKED",
            },
          });
          throw new Error(`ACCOUNT_LOCKED:${latest.lockedUntil.toISOString()}`);
        }
        const currentAttempts =
          latest.lockedUntil && latest.lockedUntil <= currentTime
            ? 0
            : latest.failedLoginAttempts;
        const failedAttempts = currentAttempts + 1;
        const lockedUntil =
          failedAttempts >= MAX_FAILED_ATTEMPTS
            ? new Date(currentTime.getTime() + LOCK_DURATION_MINUTES * 60_000)
            : null;
        const changed = await prisma.user.updateMany({
          where: {
            id: user.id,
            failedLoginAttempts: latest.failedLoginAttempts,
            lockedUntil: latest.lockedUntil,
          },
          data: {
            failedLoginAttempts: failedAttempts,
            lastFailedLoginAt: currentTime,
            lockedUntil,
          },
        });
        if (changed.count === 1) {
          await prisma.accessLog.create({
            data: {
              userId: user.id,
              attemptedAccessCode: accessCode,
              success: false,
              failureReason: "INVALID_CREDENTIALS",
            },
          });
          throw new Error(
            lockedUntil
              ? `ACCOUNT_LOCKED:${lockedUntil.toISOString()}`
              : "INVALID_CREDENTIALS",
          );
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
      prisma.user.update({
        where: { id: user.id },
        data: { failedLoginAttempts: 0, lockedUntil: null },
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
    return { user: authenticatedUser };
  }

  async changePassword(userId: string, input: unknown): Promise<void> {
    const validate = ChangePasswordSchema.safeParse(input);

    if (!validate.success) {
      const invalidFields = new Set(
        validate.error.issues.map((issue) => issue.path[0]),
      );

      if (invalidFields.has("currentPassword")) {
        throw new Error("CURRENT_PASSWORD_REQUIRED");
      }

      if (invalidFields.has("newPassword")) {
        throw new Error("PASSWORD_TOO_SHORT");
      }

      throw new Error("INVALID_INPUT");
    }

    const { currentPassword, newPassword } = validate.data;

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
      data: {
        passwordHash: newPasswordHash,
        mustChangePassword: false,
        failedLoginAttempts: 0,
        lockedUntil: null,
      },
    });
  }
}
