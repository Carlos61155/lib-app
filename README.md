# Biblioteca IFCE

Desktop application for managing the IFCE library collection, loans, and readers. The current implementation includes the login interface and the initial librarian authentication flow.

## Tech stack

- **Desktop:** Electron 30 with a Vite development workflow
- **Frontend:** React 18, TypeScript, and React Router
- **UI:** Tailwind CSS 4, shadcn-style components built on Base UI, and Lucide icons
- **Forms:** React Hook Form
- **Database:** PostgreSQL 17, run locally with Docker Compose
- **ORM and migrations:** Prisma 6
- **Password hashing:** bcrypt

Authentication runs in the Electron main process through IPC. The preload script exposes the login and password-change methods to the renderer.

## Requirements

- Node.js and npm
- Docker with Docker Compose

## Environment configuration

Create a root `.env` file (or copy `.env.example`) with these variables:

```dotenv
# Password used by Docker Compose to create the local PostgreSQL database.
POSTGRES_PASSWORD=replace_with_a_local_database_password

# Use the same password as POSTGRES_PASSWORD. PostgreSQL is exposed on localhost:5433.
DATABASE_URL="postgresql://lib_app_user:replace_with_a_local_database_password@localhost:5433/lib_app?schema=public"

# Initial librarian account created by the seed script.
INITIAL_LIBRARIAN_NAME="Library Administrator"
INITIAL_LIBRARIAN_EMAIL="admin@example.com"
INITIAL_LIBRARIAN_ACCESS_CODE="replace_with_an_access_code"
INITIAL_LIBRARIAN_PASSWORD="TROQUE_POR_UMA_SENHA_TEMPORARIA_FORTE"
```

`DATABASE_URL` must use the same password as `POSTGRES_PASSWORD`. The seed script requires all four `INITIAL_LIBRARIAN_*` values and refuses to run with the example placeholder password. Keep `.env` private; it is excluded from version control.

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create and configure `.env` as described above.

3. Start the local PostgreSQL database:

   ```bash
   docker compose up -d postgres
   ```

4. Apply database migrations and generate the Prisma client:

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. Create the initial librarian account:

   ```bash
   npm run db:seed
   ```

6. Start the Electron app with Vite:

   ```bash
   npm run dev
   ```

The seed user must change their password through the application on first access. The login uses the librarian **access code** and password.

## Available scripts

- `npm run dev` — start the Vite/Electron development app
- `npm run build` — type-check, build the renderer and package the Electron app
- `npm run lint` — run ESLint
- `npm run db:seed` — create the initial librarian account if the email/access code are unused
- `npm run preview` — preview the built Vite renderer

## Database

The Compose service is named `postgres`, uses PostgreSQL 17, and maps host port `5433` to container port `5432`. Prisma schema and migrations are in `prisma/`.
