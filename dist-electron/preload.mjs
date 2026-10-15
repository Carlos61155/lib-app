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
  createLibrarian: (input) => electron.ipcRenderer.invoke("registration:create-librarian", input)
});
