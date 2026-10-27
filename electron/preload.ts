import { contextBridge, ipcRenderer } from "electron";

type CreateStudentInput = {
  name: string;
  email: string;
  cpf: string;
  registrationNumber: string;
  course: string;
};

type CreateProfessorInput = {
  name: string;
  email: string;
  cpf: string;
  department: string;
  registrationNumber: string;
};

type CreateLibrarianInput = {
  name: string;
  email: string;
  cpf: string;
};

type CreateAuthorInput = {
  name: string;
  nationality: string;
  pseudonym?: string;
  dateOfBirth?: string;
  dateOfDeath?: string;
  biography?: string;
};

type CreateGenreInput = {
  name: string;
  description?: string;
};

type CreateBookInput = {
  title: string;
  isbn: string;
  publisher: string;
  yearOfPublication: number | string;
  authorIds: string[];
  genreIds: string[];
  subTitle?: string;
  edition?: string;
  numberOfPages?: number | string;
  language?: string;
  synopsis?: string;
  coverToken?: string;
};

type CreateCopiesInput = {
  bookId: string;
  copies: {
    shelfLocation: string;
    conservationCondition: "NEW" | "GOOD" | "FAIR" | "POOR";
    observation?: string;
  }[];
  acquisitionDate?: string;
  acquisitionMethod?: string;
};

contextBridge.exposeInMainWorld("authAPI", {
  login: (accessCode: string, password: string) =>
    ipcRenderer.invoke("auth:login", { accessCode, password }),

  changePassword: (currentPassword: string, newPassword: string) =>
    ipcRenderer.invoke("auth:change-password", {
      currentPassword,
      newPassword,
    }),

  getSession: () => ipcRenderer.invoke("auth:get-session"),
  logout: () => ipcRenderer.invoke("auth:logout"),
  activity: () => ipcRenderer.invoke("auth:activity"),

  createStudent: (input: CreateStudentInput) =>
    ipcRenderer.invoke("registration:create-student", input),

  createProfessor: (input: CreateProfessorInput) =>
    ipcRenderer.invoke("registration:create-professor", input),

  createLibrarian: (input: CreateLibrarianInput) =>
    ipcRenderer.invoke("registration:create-librarian", input),

  createAuthor: (input: CreateAuthorInput) =>
    ipcRenderer.invoke("author:create", input),

  listActiveAuthors: () => ipcRenderer.invoke("author:list-active"),

  createGenre: (input: CreateGenreInput) =>
    ipcRenderer.invoke("genre:create", input),

  listActiveGenres: () => ipcRenderer.invoke("genre:list-active"),

  createBook: (input: CreateBookInput) =>
    ipcRenderer.invoke("book:create", input),

  selectBookCover: () => ipcRenderer.invoke("book:select-cover"),

  discardBookCover: (token: string) =>
    ipcRenderer.invoke("book:discard-cover", token),

  searchActiveBooks: (query: string) =>
    ipcRenderer.invoke("copy:search-active-books", query),

  createCopies: (input: CreateCopiesInput) =>
    ipcRenderer.invoke("copy:create", input),
});
