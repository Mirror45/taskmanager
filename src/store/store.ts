import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import filtersReducer from './slices/filtersSlice';
import sortReducer from './slices/sortSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filtersReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
