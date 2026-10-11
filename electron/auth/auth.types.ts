export interface LoginInput {
  accessCode: string;
  password: string;
}

export interface AuthenticatedUser {
  id: string;
  name: string;
  accessCode: string;
  role: "BIBLIOTECARIO";
  mustChangePassword: boolean;
}

export interface LoginResult {
  user: AuthenticatedUser;
}

export type LoginFailureReason =
  | "INVALID_CREDENTIALS"
  | "ACCOUNT_INACTIVE"
  | "ACCOUNT_LOCKED";
