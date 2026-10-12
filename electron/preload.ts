import { contextBridge, ipcRenderer } from "electron";

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
});
