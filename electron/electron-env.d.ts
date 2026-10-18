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
    APP_ROOT: string;
    /** /dist/ or /public/ */
    VITE_PUBLIC: string;
  }
}

// Used in Renderer process, expose in `preload.ts`
interface Window {
  ipcRenderer: import("electron").IpcRenderer;

  authAPI: {
    login: (
      accessCode: string,
      password: string,
    ) => Promise<{
      user: {
        id: string;
        name: string;
        accessCode: string;
        role: "BIBLIOTECARIO";
        mustChangePassword: boolean;
      };
    }>;

    changePassword: (
      currentPassword: string,
      newPassword: string,
    ) => Promise<{ success: true }>;

    getSession: () => Promise<{
      user: {
        id: string;
        name: string;
        role: "BIBLIOTECARIO";
        mustChangePassword: boolean;
      };
      idleTimeoutMs: number;
    } | null>;

    logout: () => Promise<{ success: true }>;
    activity: () => Promise<boolean>;

    createStudent: (input: {
      name: string;
      email: string;
      cpf: string;
      registrationNumber: string;
      course: string;
    }) => Promise<{
      id: string;
      name: string;
      email: string;
      registrationNumber: string;
      course: string;
    }>;

    createProfessor: (input: {
      name: string;
      email: string;
      cpf: string;
      department: string;
      registrationNumber: string;
    }) => Promise<{
      id: string;
      name: string;
      email: string;
      registrationNumber: string;
    }>;

    createLibrarian: (input: {
      name: string;
      email: string;
      cpf: string;
      accessCode: string;
    }) => Promise<{
      id: string;
      name: string;
      email: string;
      accessCode: string;
      temporaryPassword: string;
    }>;

    createAuthor: (input: {
      name: string;
      nationality: string;
      pseudonym?: string;
      dateOfBirth?: string;
      dateOfDeath?: string;
      biography?: string;
    }) => Promise<{
      id: string;
      name: string;
      nationality: string;
      pseudonym: string | null;
      dateOfBirth: Date | null;
      dateOfDeath: Date | null;
      biography: string | null;
      isActive: boolean;
      createdAt: Date;
      updatedAt: Date;
    }>;
  };
}
