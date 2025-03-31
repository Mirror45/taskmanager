import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialTaskState } from '../../types/task-state';
import {
  handleAddFulfilled,
  handleEditFulfilled,
  handleFetchFulfilled,
  handlePending,
  handleRejected,
  handleRemoveFulfilled,
  handleToggleArchiveFulfilled,
  handleToggleFavoriteFulfilled,
} from '../stateHandlers/taskHandlers';
import {
  addTask,
  editTask,
  fetchTasks,
  removeTask,
  toggleArchiveTask,
  toggleFavoriteTask,
} from '../thunks/task-thunks';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialTaskState,
  reducers: {
    setEditTaskId: (state, action: PayloadAction<string | null>) => {
      state.editTaskId = action.payload;
    },
    setIsAddingTask(state, action: PayloadAction<boolean>) {
      state.isAddingTask = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch tasks
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, handleFetchFulfilled)
      .addCase(fetchTasks.rejected, handleRejected)

      // Add task
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, handleAddFulfilled)
      .addCase(addTask.rejected, handleRejected)

      // Edit task
      .addCase(editTask.pending, handlePending)
      .addCase(editTask.fulfilled, handleEditFulfilled)
      .addCase(editTask.rejected, handleRejected)

      // Remove task
      .addCase(removeTask.pending, handlePending)
      .addCase(removeTask.fulfilled, handleRemoveFulfilled)
      .addCase(removeTask.rejected, handleRejected)

      // Toggle favorite
      .addCase(toggleFavoriteTask.fulfilled, handleToggleFavoriteFulfilled)
      .addCase(toggleFavoriteTask.rejected, handleRejected)

      // Toggle archive
      .addCase(toggleArchiveTask.fulfilled, handleToggleArchiveFulfilled)
      .addCase(toggleArchiveTask.rejected, handleRejected);
  },
});

export const { setEditTaskId, setIsAddingTask } = taskSlice.actions;
export default taskSlice.reducer;
