# Biblioteca IFCE (Libapp)

Aplicativo desktop para a biblioteca do IFCE. A implementação atual oferece a tela de login e o fluxo inicial de autenticação do bibliotecário. As funções de catálogo do acervo, empréstimos e gestão de leitores ainda não foram implementadas.

## Tecnologias

- **Aplicativo desktop:** Electron 30 com Vite
- **Interface:** React 18, TypeScript e React Router
- **Componentes visuais:** Tailwind CSS 4, Base UI e ícones Lucide
- **Formulários:** React Hook Form
- **Banco de dados:** SQLite
- **ORM e migrações:** Prisma 7 com adapter SQLite `better-sqlite3`
- **Hash de senhas:** bcrypt

A autenticação é executada no processo principal do Electron e se comunica com a interface por IPC. A janela se chama **Libapp** e não exibe o menu padrão do Electron. O aplicativo empacotado guarda o banco SQLite no diretório de dados do usuário e aplica as migrações ao iniciar. Se o banco ainda não tiver usuários, o aplicativo cria o bibliotecário inicial usando as configurações `INITIAL_LIBRARIAN_*`. A senha inicial é temporária e deve ser alterada no primeiro acesso.

## Requisitos

- Node.js e npm

Docker e um servidor de banco de dados não são necessários.

## Configuração do ambiente

Instale as dependências e copie o arquivo de exemplo:

```bash
npm install
cp .env.example .env
```

O exemplo configura o banco de desenvolvimento em `prisma/dev.db` e mostra as variáveis para criar o bibliotecário inicial:

```dotenv
DATABASE_URL="file:./prisma/dev.db"

INITIAL_LIBRARIAN_NAME="Bibliotecário responsável"
INITIAL_LIBRARIAN_EMAIL="bibliotecario@example.invalid"
INITIAL_LIBRARIAN_CPF="CHANGE_ME_VALID_CPF"
INITIAL_LIBRARIAN_ACCESS_CODE="CHANGE_ME_ACCESS_CODE"
INITIAL_LIBRARIAN_PASSWORD="CHANGE_ME_WITH_A_STRONG_TEMPORARY_PASSWORD"
```

Antes de iniciar o aplicativo, substitua todos os valores de exemplo pelas credenciais desejadas. Use um e-mail válido, um código de acesso e uma senha temporária forte. O arquivo `.env` é ignorado pelo Git; mantenha-o privado.

## Desenvolvimento local

1. Gere o cliente Prisma e aplique as migrações ao banco SQLite:

   ```bash
   npx prisma generate
   npm run db:migrate
   ```

2. Inicie o aplicativo com Vite:

   ```bash
   npm run dev
   ```

O aplicativo também verifica e aplica migrações pendentes ao iniciar. Se o banco de desenvolvimento não tiver usuários, o bibliotecário inicial é criado automaticamente com os valores do `.env` na raiz do projeto. Entre usando o **código de acesso** e a senha temporária e, em seguida, defina uma nova senha. O comando `npm run db:seed` também está disponível para desenvolvimento e automação; ele usa o banco indicado por `DATABASE_URL` e não cria o bibliotecário se já houver alguém com o mesmo e-mail, CPF ou código de acesso.

## Banco de dados

O esquema Prisma e as migrações estão em `prisma/`. No desenvolvimento, o caminho do banco SQLite é definido por `DATABASE_URL`; no exemplo, `file:./prisma/dev.db` aponta para `prisma/dev.db` na raiz do projeto.

Na versão empacotada, o banco se chama `lib-app.db` e fica no diretório de dados do usuário do Electron. Antes da primeira execução, coloque nesse diretório um arquivo `.env` com estas quatro variáveis:

```dotenv
INITIAL_LIBRARIAN_NAME="Nome do bibliotecário"
INITIAL_LIBRARIAN_EMAIL="bibliotecario@ifce.edu.br"
INITIAL_LIBRARIAN_ACCESS_CODE="codigo-de-acesso"
INITIAL_LIBRARIAN_PASSWORD="senha-temporaria-forte"
```

O instalador não inclui o `.env` do projeto; assim, as credenciais não ficam gravadas no instalador. O aplicativo informa o caminho esperado do arquivo se não conseguir criar o usuário inicial. Depois que o bibliotecário for criado, o `.env` não é mais necessário para iniciar o aplicativo.

O projeto não usa mais PostgreSQL. A migração SQLite cria um esquema novo e não transfere os dados de um banco PostgreSQL existente.

## Compilação e empacotamento

Gere um instalador para o sistema operacional atual:

```bash
npm run build
```

O comando gera o cliente Prisma, verifica os tipos, compila a interface e os processos do Electron e empacota o aplicativo. O projeto usa o adapter SQLite `better-sqlite3`; gere o pacote em cada sistema operacional de destino para que as dependências nativas correspondam à plataforma. Os instaladores são salvos em `release/`.

## Scripts disponíveis

- `npm run dev` — inicia o aplicativo de desenvolvimento com Vite e Electron
- `npm run build` — gera os artefatos Prisma, verifica os tipos, compila e empacota o aplicativo
- `npm run lint` — executa o ESLint
- `npm run db:migrate` — aplica as migrações pendentes ao banco configurado
- `npm run db:seed` — cria o bibliotecário inicial no banco indicado por `DATABASE_URL` se o e-mail, CPF e código de acesso ainda não estiverem em uso
- `npm run preview` — exibe uma prévia da interface compilada pelo Vite
