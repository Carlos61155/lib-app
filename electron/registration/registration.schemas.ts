import z from "zod";

function isValidCpf(value: string): boolean {
  if (!/^\d{11}$/.test(value) || /^(\d)\1{10}$/.test(value)) {
    return false;
  }

  let sum = 0;

  for (let index = 0; index < 9; index += 1) {
    sum += Number(value[index]) * (10 - index);
  }

  const firstDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (firstDigit !== Number(value[9])) {
    return false;
  }

  sum = 0;

  for (let index = 0; index < 10; index += 1) {
    sum += Number(value[index]) * (11 - index);
  }

  const secondDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  return secondDigit === Number(value[10]);
}

const cpfSchema = z
  .string()
  .trim()
  .refine(
    (value) =>
      /^\d{11}$/.test(value) || /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value),
    { message: "CPF_FORMAT_INVALID" },
  )
  .transform((value) => value.replace(/[.-]/g, ""))
  .refine(isValidCpf, { message: "CPF_INVALID" });

const personFields = {
  name: z.string().trim().min(1, "NAME_REQUIRED").max(120),
  cpf: cpfSchema,
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
    department: z.string().trim().min(1, "DEPARTMENT_REQUIRED"),
  })
  .strict();

export const CreateLibrarianSchema = z
  .object({
    ...personFields,
  })
  .strict();
