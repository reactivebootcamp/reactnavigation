import {useAuth, useAuthDispatch} from '../context';
import {AuthActionTypes, AuthFormValues} from '../types';

export const useAuthentication = () => {
  const state = useAuth();
  const dispatch = useAuthDispatch();

  const signIn = async ({email, password}: AuthFormValues) => {
    console.log({email, password});
    // TODO: Aqui es donde llamamos al servicio Login para la Autenticacion / api/ base de datos
    dispatch({
      type: AuthActionTypes.SIGN_IN,
      payload: {token: '123123aldjiawijld'},
    });
  };

  const signOut = async () => {
    dispatch({type: AuthActionTypes.SIGN_OUT});
  };

  const signUp = async ({email, password}: AuthFormValues) => {
    console.log({email, password});
    // TODO: Aqui es donde llamamos al servicio Registro para la Autenticacion / api/ base de datos
    dispatch({
      type: AuthActionTypes.SIGN_UP,
      payload: {token: '123123aldjiawijld'},
    });
  };

  const restoreToken = async () => {
    try {
      // const token = await AsyncStorage.getItem('token);
      let token = '';

      if (token) {
        dispatch({
          type: AuthActionTypes.RESTORE_TOKEN,
          payload: {token},
        });
      }
    } catch (error) {}
  };

  return {
    ...state,
    signIn,
    signOut,
    signUp,
    restoreToken,
  };
};
