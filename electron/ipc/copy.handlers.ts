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
}
