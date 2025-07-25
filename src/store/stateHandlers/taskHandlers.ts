import { PayloadAction } from '@reduxjs/toolkit';

import { initialTaskState } from '../../types/task-state';
import { TaskType } from '../../types/task-types';

export const handlePending = (state: typeof initialTaskState) => {
  state.loading = true;
  state.error = null;
};

export const handleRejected = (
  state: typeof initialTaskState,
  action: PayloadAction<string | undefined>,
) => {
  state.loading = false;
  state.error = action.payload ?? 'Unknown error';
};

export const handleFetchFulfilled = (
  state: typeof initialTaskState,
  action: PayloadAction<TaskType[]>,
) => {
  state.loading = false;
  state.tasks = action.payload;
};

export const handleAddFulfilled = (
  state: typeof initialTaskState,
  action: PayloadAction<TaskType>,
) => {
  state.loading = false;
  state.tasks.push(action.payload);
};

export const handleEditFulfilled = (
  state: typeof initialTaskState,
  action: PayloadAction<TaskType>,
) => {
  state.loading = false;
  state.tasks = state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task));
};

export const handleRemoveFulfilled = (
  state: typeof initialTaskState,
  action: PayloadAction<string>,
) => {
  state.loading = false;
  state.tasks = state.tasks.filter((task) => task.id !== action.payload);
};

export const handleToggleFavoriteFulfilled = (
  state: typeof initialTaskState,
  action: PayloadAction<TaskType>,
) => {
  state.tasks = state.tasks.map((task) =>
    task.id === action.payload.id ? { ...task, is_favorite: action.payload.is_favorite } : task,
  );
};

export const handleToggleArchiveFulfilled = (
  state: typeof initialTaskState,
  action: PayloadAction<TaskType>,
) => {
  state.tasks = state.tasks.map((task) =>
    task.id === action.payload.id ? { ...task, is_archived: action.payload.is_archived } : task,
  );
};
