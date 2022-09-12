import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dumpReducer from '../features/backingtrack/DumpSlice'
export const store = configureStore({
  // Reducer 등록
  reducer: {
    dump: dumpReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;