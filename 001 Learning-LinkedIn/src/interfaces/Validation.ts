export interface StringValidator {
  isAcceptable(s: String): boolean;
}

/**
 * Interface para todos lo usuarios
 */
export interface CustomUser {
  name: string;
}

const user: CustomUser;
