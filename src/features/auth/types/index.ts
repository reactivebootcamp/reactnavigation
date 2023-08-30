import {ReactNode} from 'react';

export type AuthUser = {
  token: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: {
    token: string;
  } | null;
  signIn: ({email, password}: {email: string; password: string}) => void;
  signUp: ({email, password}: {email: string; password: string}) => void;
  signOut: () => void;
  isLoading: boolean;
  restoreToken: () => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};

export enum AuthActionTypes {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  SIGN_OUT = 'SIGN_OUT',
  RESTORE_TOKEN = 'RESTORE_TOKEN',
}

export type AuthAction =
  | {type: AuthActionTypes.SIGN_IN; payload: AuthUser}
  | {type: AuthActionTypes.SIGN_UP; payload: AuthUser}
  | {type: AuthActionTypes.SIGN_OUT}
  | {type: AuthActionTypes.RESTORE_TOKEN; payload: AuthUser};

export type AuthFormValues = {
  email: string;
  password: string;
};
