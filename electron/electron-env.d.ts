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

    listActiveAuthors: () => Promise<{ id: string; name: string }[]>;

    createGenre: (input: { name: string; description?: string }) => Promise<{
      id: string;
      name: string;
      description: string | null;
      isActive: boolean;
      createdAt: Date;
      updatedAt: Date;
    }>;

    listActiveGenres: () => Promise<{ id: string; name: string }[]>;

    selectBookCover: () => Promise<{
      token: string;
      fileName: string;
      previewDataUrl: string;
    } | null>;

    discardBookCover: (token: string) => Promise<{
      success: true;
    }>;

    searchActiveBooks: (query: string) => Promise<
      {
        id: string;
        title: string;
        isbn: string;
        authors: {
          author: {
            name: string;
          };
        }[];
      }[]
    >;

    createCopies: (input: {
      bookId: string;
      quantity: number | string;
      shelfLocation?: string;
      conservationCondition?: string;
      acquisitionDate?: string;
      acquisitionMethod?: string;
    }) => Promise<{
      book: {
        id: string;
        title: string;
        isActive: boolean;
      };
      quantity: number;
      copies: {
        id: string;
        inventoryCode: string;
        status: string;
      }[];
      createdAt: Date;
    }>;

    createBook: (input: {
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
    }) => Promise<{
      id: string;
      title: string;
      isbn: string;
      publisher: string;
      yearOfPublication: number;
      subTitle: string | null;
      edition: string | null;
      numberOfPages: number | null;
      language: string | null;
      synopsis: string | null;
      coverPath: string | null;
      isActive: boolean;
      createdAt: Date;
      updatedAt: Date;
      authors: {
        bookId: string;
        authorId: string;
        author: {
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
        };
      }[];
      genres: {
        bookId: string;
        genreId: string;
        genre: {
          id: string;
          name: string;
          description: string | null;
          isActive: boolean;
          createdAt: Date;
          updatedAt: Date;
        };
      }[];
    }>;
  };
}
