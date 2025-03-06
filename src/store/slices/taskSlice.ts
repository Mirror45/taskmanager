import { createSlice } from '@reduxjs/toolkit';
import { initialTaskState } from '../../types/task-state';
import {
  addTask,
  editTask,
  fetchTasks,
  removeTask,
  toggleArchiveTask,
  toggleFavoriteTask,
} from '../thunks/task-thunks';
import {
  handlePending,
  handleRejected,
  handleFetchFulfilled,
  handleAddFulfilled,
  handleEditFulfilled,
  handleRemoveFulfilled,
  handleToggleFavoriteFulfilled,
  handleToggleArchiveFulfilled,
} from '../stateHandlers/taskHandlers';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialTaskState,
  reducers: {},
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

export default taskSlice.reducer;
