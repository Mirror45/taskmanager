import { createSlice } from '@reduxjs/toolkit';
import { TaskFormState } from '../../types/task-form-state';

const initialState: TaskFormState = {
  isAddingTask: false,
};

const taskFormSlice = createSlice({
  name: 'taskForm',
  initialState,
  reducers: {
    toggleAddTaskForm: (state) => {
      state.isAddingTask = !state.isAddingTask;
    },
    closeAddTaskForm: (state) => {
      state.isAddingTask = false;
    },
  },
});

export const { toggleAddTaskForm, closeAddTaskForm } = taskFormSlice.actions;
export default taskFormSlice.reducer;
