/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬─┬ dist
     * │ │ └── index.html
     * │ │
     * │ ├─┬ dist-electron
     * │ │ ├── main.js
     * │ │ └── preload.js
     * │
     * ```
     */
    APP_ROOT: string
    /** /dist/ or /public/ */
    VITE_PUBLIC: string
  }
}

// Used in Renderer process, expose in `preload.ts`
interface Window {
  ipcRenderer: import('electron').IpcRenderer
  authAPI: {
    login: (accessCode: string, password: string) => Promise<{
      user: {
        id: string
        name: string
        accessCode: string
        role: 'BIBLIOTECARIO'
        mustChangePassword: boolean
      }
    }>
    changePassword: (currentPassword: string, newPassword: string) => Promise<{ success: true }>
    getSession: () => Promise<{
      user: { id: string; name: string; role: 'BIBLIOTECARIO'; mustChangePassword: boolean }
      idleTimeoutMs: number
    } | null>
    logout: () => Promise<{ success: true }>
    activity: () => Promise<boolean>
  }
}
