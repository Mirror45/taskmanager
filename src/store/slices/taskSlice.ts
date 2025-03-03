import { createSlice } from '@reduxjs/toolkit';
import { initialTaskState } from '../../types/task-state';
import { addTask, editTask, fetchTasks, removeTask } from '../thunks/task-thunks';
import {
  handlePending,
  handleRejected,
  handleFetchFulfilled,
  handleAddFulfilled,
  handleEditFulfilled,
  handleRemoveFulfilled,
} from '../stateHandlers/taskHandlers'; // Импортируем вспомогательные функции

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
      .addCase(removeTask.rejected, handleRejected);
  },
});

export default taskSlice.reducer;
