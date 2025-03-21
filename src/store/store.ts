import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import filtersReducer from './slices/filtersSlice';
import sortReducer from './slices/sortSlice';
import taskFormReducer from './slices/taskFormSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filtersReducer,
    sort: sortReducer,
    taskForm: taskFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
