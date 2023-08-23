import {AuthActionTypes} from '../actions/auth';

type AuthUser = {
  token: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: {
    token: string;
  } | null;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  signOut: () => void;
  isLoading: boolean;
  restoreToken: () => void;
};

export type AuthAction =
  | {type: AuthActionTypes.RESTORE_TOKEN; payload: AuthUser}
  | {type: AuthActionTypes.SIGN_IN; payload: AuthUser}
  | {type: AuthActionTypes.SIGN_OUT}
  | {type: AuthActionTypes.SIGN_UP; payload: AuthUser};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.RESTORE_TOKEN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case AuthActionTypes.SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case AuthActionTypes.SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case AuthActionTypes.SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
