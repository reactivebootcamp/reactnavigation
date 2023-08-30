import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {authReducer} from './reducers/auth';
import {
  TypedUseSelectorHook,
  useDispatch as useUntypedDispatch,
  useSelector as useUntypedSelector,
} from 'react-redux';
import {AuthAction} from './types';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export const useDispatch = (): ThunkDispatch<RootState, any, AuthAction> =>
  useUntypedDispatch();
export const useSelector: TypedUseSelectorHook<RootState> = useUntypedSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;
