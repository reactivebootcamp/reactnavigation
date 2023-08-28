export enum AuthActionTypes {
  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',
  SIGN_UP_RESQUEST = 'SIGN_UP',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',
  SIGN_OUT_REQUEST = 'SIGN_OUT',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE',
  RESTORE_TOKEN_REQUEST = 'RESTORE_TOKEN',
  RESTORE_TOKEN_SUCCESS = 'RESTORE_TOKEN_SUCCESS',
  RESTORE_TOKEN_FAILURE = 'RESTORE_TOKEN_FAILURE',
}

export type AuthUser = {
  token: string;
};

export type AuthAction =
  | {type: AuthActionTypes.SIGN_IN_REQUEST}
  | {type: AuthActionTypes.SIGN_IN_SUCCESS; payload: AuthUser | null}
  | {type: AuthActionTypes.SIGN_IN_FAILURE; payload: string}
  | {type: AuthActionTypes.SIGN_UP_RESQUEST}
  | {type: AuthActionTypes.SIGN_UP_SUCCESS; payload: AuthUser}
  | {type: AuthActionTypes.SIGN_UP_FAILURE; payload: string}
  | {type: AuthActionTypes.SIGN_OUT_REQUEST}
  | {type: AuthActionTypes.SIGN_OUT_SUCCESS}
  | {type: AuthActionTypes.SIGN_OUT_FAILURE; payload: string}
  | {type: AuthActionTypes.RESTORE_TOKEN_REQUEST}
  | {type: AuthActionTypes.RESTORE_TOKEN_SUCCESS; payload: AuthUser}
  | {type: AuthActionTypes.RESTORE_TOKEN_FAILURE; payload: string};

export type AuthFormValues = {
  email: string;
  password: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: {
    token: string;
  } | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

export type RootState = {
  auth: AuthState;
};
