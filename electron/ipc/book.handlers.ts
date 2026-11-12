import { app, dialog, ipcMain } from "electron";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { BookService } from "../book/book.service";
import { requireActiveLibrarian } from "../session/session-store";

type StagedBookCover = {
  token: string;
  librarianId: string;
  bytes: Buffer;
  extension: "jpg" | "png" | "webp";
  mimeType: "image/jpeg" | "image/png" | "image/webp";
};

const stagedBookCovers = new Map<number, StagedBookCover>();
const MAX_BOOK_COVER_BYTES = 5 * 1024 * 1024;

export function registerBookHandlers(bookService: BookService): void {
  ipcMain.handle("book:search", async (event, filters: unknown) => {
    await requireActiveLibrarian(event);
    return bookService.searchBooks(filters);
  });

  ipcMain.handle("book:search-details", async (event, bookId: unknown) => {
    await requireActiveLibrarian(event);

    if (typeof bookId !== "string") {
      throw new Error("BOOK_ID_INVALID");
    }

    return bookService.getBookDetails(bookId);
  });

  ipcMain.handle("book:create", async (event, input: unknown) => {
    const librarianId = await requireActiveLibrarian(event);

    if (input === null || typeof input !== "object" || Array.isArray(input)) {
      throw new Error("BOOK_INPUT_INVALID");
    }

    const bookInput = { ...(input as Record<string, unknown>) };
    const coverToken = bookInput.coverToken;
    delete bookInput.coverToken;

    let stagedCover: StagedBookCover | undefined;
    if (coverToken !== undefined) {
      if (typeof coverToken !== "string") {
        throw new Error("BOOK_COVER_TOKEN_INVALID");
      }

      const candidate = stagedBookCovers.get(event.sender.id);
      if (
        !candidate ||
        candidate.token !== coverToken ||
        candidate.librarianId !== librarianId
      ) {
        throw new Error("BOOK_COVER_TOKEN_INVALID");
      }

      stagedCover = candidate;
    }

    let relativeCoverPath: string | undefined;
    let absoluteCoverPath: string | undefined;

    try {
      if (stagedCover) {
        const coverDirectory = path.join(
          app.getPath("userData"),
          "book-covers",
        );
        const fileName = `${randomUUID()}.${stagedCover.extension}`;
        await mkdir(coverDirectory, { recursive: true });

        absoluteCoverPath = path.join(coverDirectory, fileName);
        relativeCoverPath = path.posix.join("book-covers", fileName);
        await writeFile(absoluteCoverPath, stagedCover.bytes, { flag: "wx" });
      }

      const book = await bookService.createBook(
        bookInput,
        librarianId,
        relativeCoverPath,
      );

      if (stagedCover) stagedBookCovers.delete(event.sender.id);
      return book;
    } catch (error) {
      if (absoluteCoverPath) {
        await unlink(absoluteCoverPath).catch(() => undefined);
      }
      throw error;
    }
  });

  ipcMain.handle("book:discard-cover", async (event, token: unknown) => {
    const librarianId = await requireActiveLibrarian(event);
    const staged = stagedBookCovers.get(event.sender.id);

    if (
      staged &&
      staged.token === token &&
      staged.librarianId === librarianId
    ) {
      stagedBookCovers.delete(event.sender.id);
    }

    return { success: true };
  });

  ipcMain.handle("book:select-cover", async (event) => {
    const librarianId = await requireActiveLibrarian(event);
    const selection = await dialog.showOpenDialog({
      title: "Selecionar capa do livro",
      properties: ["openFile"],
      filters: [
        { name: "Imagens", extensions: ["jpg", "jpeg", "png", "webp"] },
      ],
    });

    if (selection.canceled || selection.filePaths.length === 0) return null;

    const sourcePath = selection.filePaths[0];
    const fileInfo = await stat(sourcePath);
    if (fileInfo.size > MAX_BOOK_COVER_BYTES) {
      throw new Error("BOOK_COVER_TOO_LARGE");
    }

    const bytes = await readFile(sourcePath);
    if (bytes.length > MAX_BOOK_COVER_BYTES) {
      throw new Error("BOOK_COVER_TOO_LARGE");
    }

    const imageType = detectBookCoverType(bytes);
    if (!imageType) throw new Error("BOOK_COVER_FORMAT_INVALID");

    const token = randomUUID();
    stagedBookCovers.set(event.sender.id, {
      token,
      librarianId,
      bytes,
      ...imageType,
    });

    return {
      token,
      fileName: path.basename(sourcePath),
      previewDataUrl: `data:${imageType.mimeType};base64,${bytes.toString("base64")}`,
    };
  });
}

function detectBookCoverType(bytes: Buffer): {
  extension: StagedBookCover["extension"];
  mimeType: StagedBookCover["mimeType"];
} | null {
  if (
    bytes.length >= 8 &&
    bytes
      .subarray(0, 8)
      .equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
  ) {
    return { extension: "png", mimeType: "image/png" };
  }

  if (
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff
  ) {
    return { extension: "jpg", mimeType: "image/jpeg" };
  }

  if (
    bytes.length >= 12 &&
    bytes.toString("ascii", 0, 4) === "RIFF" &&
    bytes.toString("ascii", 8, 12) === "WEBP"
  ) {
    return { extension: "webp", mimeType: "image/webp" };
  }

  return null;
}
