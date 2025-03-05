import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
