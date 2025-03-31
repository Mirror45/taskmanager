import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './slices/filtersSlice';
import sortReducer from './slices/sortSlice';
import statisticsReducer from './slices/statisticsSlice';
import taskFormReducer from './slices/taskFormSlice';
import taskReducer from './slices/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filtersReducer,
    sort: sortReducer,
    taskForm: taskFormReducer,
    statistics: statisticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
