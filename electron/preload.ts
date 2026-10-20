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
  accessCode: string;
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

  createGenre: (input: CreateGenreInput) =>
    ipcRenderer.invoke("genre:create", input),
});
