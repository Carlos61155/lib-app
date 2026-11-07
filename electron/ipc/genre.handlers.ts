import { ipcMain } from "electron";
import { GenreService } from "../genre/genre.service";
import { requireActiveLibrarian } from "../session/session-store";

export function registerGenreHandlers(genreService: GenreService): void {
  ipcMain.handle("genre:list-active", async (event) => {
    await requireActiveLibrarian(event);
    return genreService.listActiveGenres();
  });

  ipcMain.handle("genre:create", async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    return genreService.createGenre(input, librarianId);
  });
}
