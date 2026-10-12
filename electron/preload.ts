import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("authAPI", {
  login: (accessCode: string, password: string) =>
    ipcRenderer.invoke("auth:login", { accessCode, password }),

  changePassword: (currentPassword: string, newPassword: string) =>
    ipcRenderer.invoke("auth:change-password", {
      currentPassword,
      newPassword,
    }),
});
