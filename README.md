# Libapp

Aplicativo desktop de gestão da biblioteca do IFCE. Permite cadastrar usuários, autores, gêneros, livros e exemplares; pesquisar livros e exemplares; e configurar regras de empréstimo.

## Principais tecnologias usadas

Electron, React, TypeScript, Vite, Tailwind CSS, Prisma e SQLite.

## Configuração

Faça uma cópia do arquivo .env.example com o nome de .env apenas. Nesse arquivo .env edite todos os campos que começam com INITIAL_LIBRARIAN para o valor que desejar

INITIAL_LIBRARIAN_ACCESS_CODE representa o nome de usuário do bibliotecário que será inserido junto com a senha para realizar o login no sistema

Exemplo de valores
```bash
INITIAL_LIBRARIAN_NAME="João Fulano da Silva"
INITIAL_LIBRARIAN_EMAIL="joao@biblioteca.edu.br"
# CPF precisa ser válido
INITIAL_LIBRARIAN_CPF="123.456.789-00"
INITIAL_LIBRARIAN_ACCESS_CODE="joao"
INITIAL_LIBRARIAN_PASSWORD="senha123"
```

## Desenvolvimento

Requisitos: Node.js e npm.

Siga a seguinte sequência de passos para executar o app em modo desenvolvedor
```bash
npm install
npx prisma generate
npm run db:migrate
npm run dev
```
## Para fazer a build do app
Após ter alterado os valores necessários no .env insira o arquivo de acordo com o seu sistema operacional

### Linux / MacOS
/home/[seu-usuario]/.config/libapp/.env

### Windows
C:\Users\[NomeDoUsuario]\AppData\Roaming

## Dicas

Como o banco de dados do app está armazenado no SQLite, recomenda-se utilizar a extensão do VSCode SQLite Viewer (https://open-vsx.org/vscode/item?itemName=qwtel.sqlite-viewer) para visualizar as tabelas

## Legenda dos scripts

- `npm run dev` — inicia o aplicativo em desenvolvimento
- `npm run build` — compila e empacota o aplicativo para o sistema operacional usado no seu computador (os instaladores ficam em `release/`)
- `npm run lint` — verifica o código com ESLint
- `npm run db:migrate` — aplica migrações ao banco configurado
- `npm run db:seed` — cria o bibliotecário inicial, se ainda não existir
