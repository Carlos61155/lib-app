import { ipcMain } from "electron";
import { RegistrationService } from "../registration/registration.service";
import { requireActiveLibrarian } from "../session/session-store";

export function registerRegistrationHandlers(
  registrationService: RegistrationService,
): void {
  ipcMain.handle("registration:create-student", async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    return registrationService.createStudent(input, librarianId);
  });

  ipcMain.handle("registration:create-professor", async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    return registrationService.createProfessor(input, librarianId);
  });

  ipcMain.handle("registration:create-librarian", async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    return registrationService.createLibrarian(input, librarianId);
  });
}
