"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("authAPI", {
  login: (accessCode, password) => electron.ipcRenderer.invoke("auth:login", { accessCode, password }),
  changePassword: (currentPassword, newPassword) => electron.ipcRenderer.invoke("auth:change-password", {
    currentPassword,
    newPassword
  })
});
