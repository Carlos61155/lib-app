import { prisma } from "../database";
import { ChangePasswordSchema, InitialLibrarianSchema, LoginSchema } from "./auth.schemas";
import { AuthenticatedUser, LoginResult } from "./auth.types";
import { hashPassword, verifyPassword } from "./password.service";

const MAX_FAILED_ATTEMPTS = 3;
const LOCK_DURATION_MINUTES = 15;

export class AuthService {
  async provisionInitialLibrarian(input: unknown): Promise<boolean> {
    if ((await prisma.user.count()) > 0) return false;

    const configuration = input as Record<string, unknown>;
    const requiredFields = ["name", "email", "accessCode", "password"] as const;
    const missingFields = requiredFields.filter(
      (field) => typeof configuration?.[field] !== "string" || !configuration[field].trim(),
    );
    if (missingFields.length > 0) {
      const envNames: Record<(typeof requiredFields)[number], string> = {
        name: "INITIAL_LIBRARIAN_NAME",
        email: "INITIAL_LIBRARIAN_EMAIL",
        accessCode: "INITIAL_LIBRARIAN_ACCESS_CODE",
        password: "INITIAL_LIBRARIAN_PASSWORD",
      };
      throw new Error(
        `INITIAL_LIBRARIAN_CONFIGURATION_MISSING:${missingFields.map((field) => envNames[field]).join(",")}`,
      );
    }

    const validate = InitialLibrarianSchema.safeParse(input);
    if (!validate.success) {
      const issue = validate.error.issues[0];
      throw new Error(issue?.message ?? "INVALID_INPUT");
    }

    const { name, email, accessCode, password } = validate.data;
    if (
      email.endsWith(".invalid") ||
      accessCode.startsWith("CHANGE_ME") ||
      password.includes("CHANGE_ME") ||
      password === "TROQUE_POR_UMA_SENHA_TEMPORARIA_FORTE"
    ) {
      throw new Error("INITIAL_LIBRARIAN_CONFIGURATION_HAS_PLACEHOLDERS");
    }

    const passwordHash = await hashPassword(password);
    const user = await prisma.$transaction(async (transaction) => {
      if ((await transaction.user.count()) > 0) return null;

      return transaction.user.create({
        data: {
          name,
          email,
          accessCode,
          passwordHash,
          role: "BIBLIOTECARIO",
          isActive: true,
          mustChangePassword: true,
        },
      });
    });

    return user !== null;
  }

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
