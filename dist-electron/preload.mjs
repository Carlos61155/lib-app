"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("authAPI", {
  login: (accessCode, password) => electron.ipcRenderer.invoke("auth:login", { accessCode, password }),
  changePassword: (currentPassword, newPassword) => electron.ipcRenderer.invoke("auth:change-password", {
    currentPassword,
    newPassword
  }),
  getSession: () => electron.ipcRenderer.invoke("auth:get-session"),
  logout: () => electron.ipcRenderer.invoke("auth:logout"),
  activity: () => electron.ipcRenderer.invoke("auth:activity"),
  createStudent: (input) => electron.ipcRenderer.invoke("registration:create-student", input),
  createProfessor: (input) => electron.ipcRenderer.invoke("registration:create-professor", input),
  createLibrarian: (input) => electron.ipcRenderer.invoke("registration:create-librarian", input),
  createAuthor: (input) => electron.ipcRenderer.invoke("author:create", input),
  listActiveAuthors: () => electron.ipcRenderer.invoke("author:list-active"),
  createGenre: (input) => electron.ipcRenderer.invoke("genre:create", input),
  listActiveGenres: () => electron.ipcRenderer.invoke("genre:list-active"),
  createBook: (input) => electron.ipcRenderer.invoke("book:create", input),
  selectBookCover: () => electron.ipcRenderer.invoke("book:select-cover"),
  discardBookCover: (token) => electron.ipcRenderer.invoke("book:discard-cover", token),
  searchActiveBooks: (query) => electron.ipcRenderer.invoke("copy:search-active-books", query),
  createCopies: (input) => electron.ipcRenderer.invoke("copy:create", input)
});
