# Libapp

Aplicativo desktop de gestão da biblioteca do IFCE. Permite cadastrar usuários, autores, gêneros, livros e exemplares; pesquisar livros e exemplares; e configurar regras de empréstimo.

## Tecnologias

Electron, React, TypeScript, Vite, Tailwind CSS, Prisma e SQLite.

## Desenvolvimento

Requisitos: Node.js e npm.

```bash
npm install
cp .env.example .env
npx prisma generate
npm run db:migrate
npm run dev
```

Edite `.env` para configurar o banco local e os dados do bibliotecário inicial. O banco de desenvolvimento padrão fica em `prisma/dev.db`.

## Scripts

- `npm run dev` — inicia o aplicativo em desenvolvimento
- `npm run build` — compila e empacota o aplicativo para o sistema atual; os instaladores ficam em `release/`
- `npm run lint` — verifica o código com ESLint
- `npm run db:migrate` — aplica migrações ao banco configurado
- `npm run db:seed` — cria o bibliotecário inicial, se ainda não existir
