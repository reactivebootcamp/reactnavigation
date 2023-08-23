import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';
import {AuthAction, AuthState, authReducer} from '../reducers/auth';

type AuthProviderProps = {
  children: ReactNode;
};

export const initialState: AuthState = {
  isAuthenticated: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
  restoreToken: () => {},
  user: null,
  isLoading: false,
};

export const AuthContext = createContext<[AuthState, Dispatch<AuthAction>]>([
  initialState,
  () => {},
]);

export const useAuth = () => useContext(AuthContext)[0];

export const useAuthDispatch = () => useContext(AuthContext)[1];

export const AuthProvider = ({children}: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={useReducer(authReducer, initialState)}>
      {children}
    </AuthContext.Provider>
  );
};
