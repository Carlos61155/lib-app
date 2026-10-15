import "dotenv/config";
import { PrismaClient } from "../electron/generated/prisma/client";
import { hashPassword } from "../electron/auth/password.service";

const prisma = new PrismaClient();

async function main() {
  const name = process.env.INITIAL_LIBRARIAN_NAME;
  const email = process.env.INITIAL_LIBRARIAN_EMAIL;
  const accessCode = process.env.INITIAL_LIBRARIAN_ACCESS_CODE;
  const password = process.env.INITIAL_LIBRARIAN_PASSWORD;

  if (!name || !email || !accessCode || !password) {
    throw new Error(
      "Configure as variáveis INITIAL_LIBRARIAN_* no arquivo .env.",
    );
  }

  if (
    password === "TROQUE_POR_UMA_SENHA_TEMPORARIA_FORTE" ||
    password.includes("CHANGE_ME")
  ) {
    throw new Error(
      "Defina uma senha temporária forte antes de executar o seed.",
    );
  }

  const existingUser = await prisma.librarian.findFirst({
    where: {
      OR: [{ person: { email } }, { accessCode }],
    },
  });

  if (existingUser) {
    console.log(
      "Já existe um usuário com esse e-mail ou código. Nenhuma alteração foi realizada.",
    );
    return;
  }

  const passwordHash = await hashPassword(password);

  await prisma.$transaction(async (transaction) => {
    const person = await transaction.person.create({ data: { name, email } });
    await transaction.librarian.create({
      data: {
        personId: person.id,
        accessCode,
        passwordHash,
        isActive: true,
        mustChangePassword: true,
      },
    });
    await transaction.registrationLog.create({
      data: { personId: person.id, createdByLibrarianId: null },
    });
  });

  console.log("Bibliotecário inicial criado com sucesso.");
  console.log("A troca de senha no primeiro acesso está habilitada.");
}

main()
  .catch((error: unknown) => {
    console.error("Erro ao executar o seed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
