import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/auth/auth.slices';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
