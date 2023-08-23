import {useAuth, useAuthDispatch} from '../context/auth';
import {AuthActionTypes} from '../actions/auth';

export const useAuthentication = () => {
  const state = useAuth();
  const dispatch = useAuthDispatch();
  const signIn = async (email: string, password: string) => {
    console.log({email, password});
    dispatch({type: AuthActionTypes.SIGN_IN, payload: {token: '123'}});
  };

  const signUp = async (email: string, password: string) => {
    console.log({email, password});
    dispatch({type: AuthActionTypes.SIGN_UP, payload: {token: '123'}});
  };

  const signOut = async () => {
    dispatch({type: AuthActionTypes.SIGN_OUT});
  };

  const restoreToken = async () => {
    try {
      // const token = await AsyncStorage.getItem('token');
      let token = '';
      if (token) {
        dispatch({type: AuthActionTypes.RESTORE_TOKEN, payload: {token}});
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    ...state,
    signIn,
    signUp,
    signOut,
    restoreToken,
  };
};
