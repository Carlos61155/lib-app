import { ipcMain } from "electron";
import { CopyService } from "../copy/copy.service";
import { requireActiveLibrarian } from "../session/session-store";

export function registerCopyHandlers(copyService: CopyService): void {
  ipcMain.handle("copy:search-active-books", async (event, query: unknown) => {
    await requireActiveLibrarian(event);

    if (typeof query !== "string") {
      throw new Error("COPY_SEARCH_QUERY_INVALID");
    }

    return copyService.searchActiveBooks(query);
  });

  ipcMain.handle("copy:create", async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    return copyService.createCopies(input, librarianId);
  });

  ipcMain.handle("copy:search", async (event, filters: unknown) => {
    await requireActiveLibrarian(event);
    return copyService.searchCopies(filters);
  });

  ipcMain.handle("copy:details", async (event, copyId: unknown) => {
    await requireActiveLibrarian(event);

    if (typeof copyId !== "string") {
      throw new Error("COPY_ID_INVALID");
    }

    return copyService.getCopyDetails(copyId);
  });

  ipcMain.handle(
    "copy:search-books-for-filter",
    async (event, query: unknown) => {
      await requireActiveLibrarian(event);

      if (typeof query !== "string") {
        throw new Error("COPY_BOOK_SEARCH_QUERY_INVALID");
      }

      return copyService.searchBooksForCopyFilter(query);
    },
  );
}
