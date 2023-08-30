export enum AuthActionTypes {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  SIGN_OUT = 'SIGN_OUT',
  RESTORE_TOKEN = 'RESTORE_TOKEN',
}

export type AuthUser = {
  token: string;
} | null;

export type AuthState = {
  isAuthenticated: boolean;
  user:
    | {
        token: string;
      }
    | null
    | unknown;
  isLoading: boolean;
  isError: boolean;
  error: string | null | unknown;
};
