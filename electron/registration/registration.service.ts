import { randomBytes } from "node:crypto";
import { prisma } from "../database";
import { hashPassword } from "../auth/password.service";
import {
  CreateLibrarianSchema,
  CreateProfessorSchema,
  CreateStudentSchema,
} from "./registration.schemas";

function handleDatabaseError(error: unknown): never {
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    error.code === "P2002"
  ) {
    throw new Error("DUPLICATE_DATA");
  }

  throw error;
}

export class RegistrationService {
  async createStudent(input: unknown, librarianId: string) {
    const data = CreateStudentSchema.parse(input);
    const emailAlreadyExists = await prisma.person.findUnique({
      where: { email: data.email },
    });

    if (emailAlreadyExists) {
      throw new Error("EMAIL_ALREADY_REGISTERED");
    }

    const registrationNumberAlreadyExists = await prisma.student.findUnique({
      where: {
        registrationNumber: data.registrationNumber,
      },
    });

    if (registrationNumberAlreadyExists) {
      throw new Error("REGISTRATION_NUMBER_ALREADY_REGISTERED");
    }
    try {
      return await prisma.$transaction(async (transaction) => {
        const person = await transaction.person.create({
          data: {
            name: data.name,
            email: data.email,
          },
        });

        const student = await transaction.student.create({
          data: {
            personId: person.id,
            registrationNumber: data.registrationNumber,
            course: data.course,
          },
        });

        await transaction.registrationLog.create({
          data: {
            personId: person.id,
            createdByLibrarianId: librarianId,
          },
        });

        return {
          id: student.id,
          name: person.name,
          email: person.email,
          registrationNumber: student.registrationNumber,
          course: student.course,
        };
      });
    } catch (error) {
      handleDatabaseError(error);
    }
  }

  async createProfessor(input: unknown, librarianId: string) {
    const data = CreateProfessorSchema.parse(input);

    const emailAlreadyExists = await prisma.person.findUnique({
      where: { email: data.email },
    });

    if (emailAlreadyExists) {
      throw new Error("EMAIL_ALREADY_REGISTERED");
    }

    const registrationNumberAlreadyExists = await prisma.professor.findUnique({
      where: {
        registrationNumber: data.registrationNumber,
      },
    });

    if (registrationNumberAlreadyExists) {
      throw new Error("REGISTRATION_NUMBER_ALREADY_REGISTERED");
    }

    try {
      return await prisma.$transaction(async (transaction) => {
        const person = await transaction.person.create({
          data: {
            name: data.name,
            email: data.email,
          },
        });

        const professor = await transaction.professor.create({
          data: {
            personId: person.id,
            registrationNumber: data.registrationNumber,
          },
        });

        await transaction.registrationLog.create({
          data: {
            personId: person.id,
            createdByLibrarianId: librarianId,
          },
        });

        return {
          id: professor.id,
          name: person.name,
          email: person.email,
          registrationNumber: professor.registrationNumber,
        };
      });
    } catch (error) {
      handleDatabaseError(error);
    }
  }

  async createLibrarian(input: unknown, creatorId: string) {
    const data = CreateLibrarianSchema.parse(input);

    const emailAlreadyExists = await prisma.person.findUnique({
      where: { email: data.email },
    });

    if (emailAlreadyExists) {
      throw new Error("EMAIL_ALREADY_REGISTERED");
    }

    const accessCodeAlreadyExists = await prisma.librarian.findUnique({
      where: {
        accessCode: data.accessCode,
      },
    });

    if (accessCodeAlreadyExists) {
      throw new Error("ACCESS_CODE_ALREADY_REGISTERED");
    }

    const temporaryPassword = randomBytes(18).toString("base64url");
    const passwordHash = await hashPassword(temporaryPassword);

    try {
      return await prisma.$transaction(async (transaction) => {
        const person = await transaction.person.create({
          data: {
            name: data.name,
            email: data.email,
          },
        });

        const librarian = await transaction.librarian.create({
          data: {
            personId: person.id,
            accessCode: data.accessCode,
            passwordHash,
            isActive: true,
            mustChangePassword: true,
          },
        });

        await transaction.registrationLog.create({
          data: {
            personId: person.id,
            createdByLibrarianId: creatorId,
          },
        });

        return {
          id: librarian.id,
          name: person.name,
          email: person.email,
          accessCode: librarian.accessCode,
          temporaryPassword,
        };
      });
    } catch (error) {
      handleDatabaseError(error);
    }
  }
}
