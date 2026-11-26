import { Prisma } from "../generated/prisma/client";
import { prisma } from "../database";
import { CreateLoanSchema } from "./loan.schemas";

function startOfToday(): Date {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function isDatabaseError(error: unknown): error is { code: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof error.code === "string"
  );
}

export class LoanService {
  async createLoan(input: unknown, librarianId: string) {
    const parsed = CreateLoanSchema.safeParse(input);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];

      if (issue?.path[0] === "readerId") {
        throw new Error("LOAN_READER_ID_INVALID");
      }

      if (issue?.path[0] === "readerType") {
        throw new Error("LOAN_READER_TYPE_INVALID");
      }

      if (issue?.path[0] === "inventoryCode") {
        throw new Error(
          issue.message === "LOAN_INVENTORY_CODE_REQUIRED"
            ? "LOAN_INVENTORY_CODE_REQUIRED"
            : "LOAN_INVENTORY_CODE_INVALID",
        );
      }

      throw new Error("LOAN_INPUT_INVALID");
    }

    const { readerId, readerType, inventoryCode } = parsed.data;
    const loanDate = startOfToday();

    try {
      return await prisma.$transaction(
        async (tx) => {
          const reader =
            readerType === "STUDENT"
              ? await tx.student.findUnique({
                  where: { id: readerId },
                  select: {
                    id: true,
                    isActive: true,
                    person: {
                      select: { name: true },
                    },
                  },
                })
              : await tx.professor.findUnique({
                  where: { id: readerId },
                  select: {
                    id: true,
                    isActive: true,
                    person: {
                      select: { name: true },
                    },
                  },
                });

          if (!reader) {
            throw new Error("LOAN_READER_NOT_FOUND");
          }

          if (!reader.isActive) {
            throw new Error("LOAN_READER_BLOCKED");
          }

          const rule = await tx.loanRule.findUnique({
            where: { profile: readerType },
            select: {
              loanPeriodDays: true,
              maxSimultaneousLoans: true,
            },
          });

          if (!rule) {
            throw new Error("LOAN_RULE_NOT_FOUND");
          }

          const readerLoanFilter =
            readerType === "STUDENT"
              ? { studentId: readerId }
              : { professorId: readerId };

          const ongoingLoans = await tx.loan.findMany({
            where: {
              ...readerLoanFilter,
              status: "IN_PROGRESS",
            },
            select: {
              dueDate: true,
            },
          });

          const overdueLoans = ongoingLoans.filter(
            (loan) => loan.dueDate < loanDate,
          );

          if (overdueLoans.length > 0) {
            throw new Error("LOAN_READER_HAS_OVERDUE");
          }

          if (ongoingLoans.length >= rule.maxSimultaneousLoans) {
            throw new Error("LOAN_LIMIT_REACHED");
          }

          const copy = await tx.copy.findUnique({
            where: { inventoryCode },
            select: {
              id: true,
              inventoryCode: true,
              status: true,
              book: {
                select: {
                  title: true,
                  isActive: true,
                },
              },
            },
          });

          if (!copy) {
            throw new Error("LOAN_COPY_NOT_FOUND");
          }

          if (copy.status !== "AVAILABLE") {
            throw new Error("LOAN_COPY_UNAVAILABLE");
          }

          if (!copy.book.isActive) {
            throw new Error("LOAN_BOOK_INACTIVE");
          }

          const dueDate = addDays(loanDate, rule.loanPeriodDays);

          const loan = await tx.loan.create({
            data: {
              ...(readerType === "STUDENT"
                ? { studentId: readerId }
                : { professorId: readerId }),
              copyId: copy.id,
              librarianId,
              loanDate,
              dueDate,
              status: "IN_PROGRESS",
              renewalCount: 0,
              loanPeriodDaysAtLoan: rule.loanPeriodDays,
            },
            select: {
              id: true,
              status: true,
              loanDate: true,
              dueDate: true,
              renewalCount: true,
              copy: {
                select: {
                  inventoryCode: true,
                  book: {
                    select: {
                      title: true,
                    },
                  },
                },
              },
            },
          });

          const updatedCopy = await tx.copy.updateMany({
            where: {
              id: copy.id,
              status: "AVAILABLE",
            },
            data: {
              status: "LOANED",
            },
          });

          if (updatedCopy.count !== 1) {
            throw new Error("LOAN_COPY_UNAVAILABLE");
          }

          return {
            ...loan,
            reader: {
              id: reader.id,
              name: reader.person.name,
              type: readerType,
            },
          };
        },
        {
          isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
        },
      );
    } catch (error) {
      if (error instanceof Error && error.message.startsWith("LOAN_")) {
        throw error;
      }

      if (isDatabaseError(error) && ["P2002", "P2034"].includes(error.code)) {
        throw new Error("LOAN_COPY_UNAVAILABLE");
      }

      throw error;
    }
  }
}
