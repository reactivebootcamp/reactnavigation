export enum AuthActionTypes {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  SIGN_UP = 'SIGN_UP',
  RESTORE_TOKEN = 'RESTORE_TOKEN',
}

type Action =
  | {type: AuthActionTypes.SIGN_IN; payload: {token: string}}
  | {type: AuthActionTypes.SIGN_OUT}
  | {type: AuthActionTypes.SIGN_UP; payload: {email: string; password: string}}
  | {type: AuthActionTypes.RESTORE_TOKEN; payload: {token: string}};

export const signIn = (token: string): Action => ({
  type: AuthActionTypes.SIGN_IN,
  payload: {token},
});

export const signOut = (): Action => ({
  type: AuthActionTypes.SIGN_OUT,
});

export const signUp = (email: string, password: string): Action => ({
  type: AuthActionTypes.SIGN_UP,
  payload: {email, password},
});

export const restoreToken = (token: string): Action => ({
  type: AuthActionTypes.RESTORE_TOKEN,
  payload: {token},
});
