import { ipcMain } from "electron";
import { AuthorService } from "../author/author.service";
import { requireActiveLibrarian } from "../session/session-store";

export function registerAuthorHandlers(authorService: AuthorService): void {
  ipcMain.handle("author:create", async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    return authorService.createAuthor(input, librarianId);
  });

  ipcMain.handle("author:list-active", async (event) => {
    await requireActiveLibrarian(event);
    return authorService.listActiveAuthors();
  });
}
