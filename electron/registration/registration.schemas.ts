import z from "zod";

const personFields = {
  name: z.string().trim().min(1, "NAME_REQUIRED").max(120),

  email: z.string().trim().email("EMAIL_INVALID").max(254),
};

export const CreateStudentSchema = z
  .object({
    ...personFields,

    registrationNumber: z
      .string()
      .trim()
      .min(1, "REGISTRATION_NUMBER_REQUIRED")
      .max(40),

    course: z.string().trim().min(1, "COURSE_REQUIRED").max(120),
  })
  .strict();

export const CreateProfessorSchema = z
  .object({
    ...personFields,

    registrationNumber: z
      .string()
      .trim()
      .min(1, "REGISTRATION_NUMBER_REQUIRED")
      .max(40),
  })
  .strict();

export const CreateLibrarianSchema = z
  .object({
    ...personFields,
    accessCode: z.string().trim().min(1, "ACCESS_CODE_REQUIRED").max(64),
  })
  .strict();
