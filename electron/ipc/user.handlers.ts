import { ipcMain } from "electron";
import { UserService } from "../user/user.service";
import { requireActiveLibrarian } from "../session/session-store";

export function registerUserHandlers(userService: UserService): void {
  ipcMain.handle("user:search", async (event, filters: unknown) => {
    await requireActiveLibrarian(event);
    return userService.searchUsers(filters);
  });
}
