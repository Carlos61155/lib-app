import { prisma } from "../database";
import { SearchUsersSchema } from "../user/user.search.schemas";

export class UserService {
  async searchUsers(input: unknown) {
    const parsed = SearchUsersSchema.safeParse(input);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];

      if (issue?.message === "USER_SEARCH_CRITERIA_REQUIRED") {
        throw new Error("USER_SEARCH_CRITERIA_REQUIRED");
      }
      if (issue?.message === "USER_SEARCH_NAME_TOO_SHORT") {
        throw new Error("USER_SEARCH_NAME_TOO_SHORT");
      }
      if (issue?.path[0] === "cpf") {
        throw new Error("USER_SEARCH_CPF_INVALID");
      }
      if (issue?.path[0] === "registrationNumber") {
        throw new Error("USER_SEARCH_REGISTRATION_INVALID");
      }
      if (issue?.path[0] === "type" || issue?.path[0] === "status") {
        throw new Error("USER_SEARCH_FILTER_INVALID");
      }

      throw new Error("USER_SEARCH_FILTERS_INVALID");
    }

    const filters = parsed.data;

    const types = filters.type
      ? [filters.type]
      : (["STUDENT", "PROFESSOR"] as const);

    const results = await Promise.all(
      types.map(async (type) => {
        const isActive =
          filters.status === "ACTIVE"
            ? true
            : filters.status === "BLOCKED"
              ? false
              : undefined;

        if (type === "STUDENT") {
          const students = await prisma.student.findMany({
            where: {
              ...(filters.registrationNumber
                ? { registrationNumber: filters.registrationNumber }
                : {}),
              ...(isActive !== undefined ? { isActive } : {}),
              person: {
                ...(filters.name ? { name: { contains: filters.name } } : {}),
                ...(filters.cpf ? { cpf: filters.cpf } : {}),
              },
            },
            select: {
              id: true,
              registrationNumber: true,
              isActive: true,
              blockedAt: true,
              person: { select: { name: true } },
            },
          });

          return students.map((student) => ({
            id: student.id,
            name: student.person.name,
            type: "STUDENT" as const,
            registrationNumber: student.registrationNumber,
            status: student.isActive
              ? ("ACTIVE" as const)
              : ("BLOCKED" as const),
            blockedAt: student.blockedAt,
          }));
        }

        const professors = await prisma.professor.findMany({
          where: {
            ...(filters.registrationNumber
              ? { registrationNumber: filters.registrationNumber }
              : {}),
            ...(isActive !== undefined ? { isActive } : {}),
            person: {
              ...(filters.name ? { name: { contains: filters.name } } : {}),
              ...(filters.cpf ? { cpf: filters.cpf } : {}),
            },
          },
          select: {
            id: true,
            registrationNumber: true,
            isActive: true,
            blockedAt: true,
            person: { select: { name: true } },
          },
        });

        return professors.map((professor) => ({
          id: professor.id,
          name: professor.person.name,
          type: "PROFESSOR" as const,
          registrationNumber: professor.registrationNumber,
          status: professor.isActive
            ? ("ACTIVE" as const)
            : ("BLOCKED" as const),
          blockedAt: professor.blockedAt,
        }));
      }),
    );

    return results.flat().sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }
}
