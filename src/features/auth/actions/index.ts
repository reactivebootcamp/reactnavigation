import {AuthAction, AuthActionTypes} from '../types';

export const signIn = ({token}: {token: string}): AuthAction => ({
  type: AuthActionTypes.SIGN_IN,
  payload: {token},
});

export const signOut = (): AuthAction => ({
  type: AuthActionTypes.SIGN_OUT,
});

export const signUp = ({token}: {token: string}): AuthAction => ({
  type: AuthActionTypes.SIGN_UP,
  payload: {token},
});

export const restoreToken = ({token}: {token: string}): AuthAction => ({
  type: AuthActionTypes.RESTORE_TOKEN,
  payload: {token},
});
