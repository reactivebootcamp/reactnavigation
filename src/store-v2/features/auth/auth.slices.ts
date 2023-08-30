import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AuthActionTypes, AuthState, AuthUser} from './types';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  error: null,
};

export const signIn = createAsyncThunk(
  `auth/${AuthActionTypes.SIGN_IN}`,
  async (payload: {email: string; password: string}, thunkAPI) => {
    try {
      console.warn({payload});
      // TODO: Aqui es donde llamamos al servicio Login para la Autenticacion / api/ base de datos
      //   const response = await fetch('http://localhost:3000/api/auth/signin', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(payload),
      //   });

      //   const data = await response.json();
      // const response = null;

      const data: AuthUser | null = {token: 'awdijawdjilawjdli'};
      if (!data) {
        return thunkAPI.rejectWithValue('Algo ha salido mal');
      }
      return data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const signOut = createAsyncThunk(
  `auth/${AuthActionTypes.SIGN_OUT}`,
  async (_, thunkAPI) => {
    try {
      // TODO: Aqui es donde llamamos al servicio Login para la Autenticacion / api/ base de datos
      //   const response = await fetch('http://localhost:3000/api/auth/signout', {
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   });

      //   const data = await response.json();
      return thunkAPI.fulfillWithValue(null);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(signOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, state => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
