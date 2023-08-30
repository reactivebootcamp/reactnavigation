import {AuthActionTypes, AuthFormValues, AuthUser} from '../types';
import {AppDispatch, AppThunk} from '..';

export const signIn = ({email, password}: AuthFormValues): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({type: AuthActionTypes.SIGN_IN_REQUEST});
      console.warn({email, password});
      // TODO: Aqui es donde llamamos al servicio Login para la Autenticacion / api/ base de datos
      //   const response = await fetch('http://localhost:3000/api/auth/signin', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({email, password}),
      //   });

      //   const data = await response.json();
      const data: AuthUser | null = {
        token: '190321238021',
      };

      if (!data) {
        dispatch({type: AuthActionTypes.SIGN_IN_FAILURE, payload: 'Error'});
        return;
      }

      dispatch({type: AuthActionTypes.SIGN_IN_SUCCESS, payload: data});
    } catch (error) {
      dispatch({type: AuthActionTypes.SIGN_IN_FAILURE, payload: 'Error'});
    }
  };
};

export const signOut = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      // TODO: aqui es donde llamamos el API/ Servicio de Logout
      dispatch({type: AuthActionTypes.SIGN_OUT_REQUEST});

      // TODO: Aqui es donde llamamos al servicio Login para la Autenticacion / api/ base de datos
      //   const response = await fetch('http://localhost:3000/api/auth/signout', {
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   });

      //   const data = await response.json();
      dispatch({type: AuthActionTypes.SIGN_OUT_SUCCESS});
    } catch (error) {
      dispatch({
        type: AuthActionTypes.SIGN_OUT_FAILURE,
        payload: `Error: ${error}`,
      });
    }
  };
};
