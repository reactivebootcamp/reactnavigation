import {AuthAction, AuthActionTypes} from '../types';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  error: null,
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AuthActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        isAuthenticated: false,
      };
    case AuthActionTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case AuthActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
