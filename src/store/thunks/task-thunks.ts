import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskType } from '../../types/task-types';
import { getTasks, createTask, updateTask, deleteTask } from '../../api/api';

export const fetchTasks = createAsyncThunk<TaskType[], void, { rejectValue: string }>(
  'tasks/fetchTasks',
  async (_, thunkAPI) => {
    try {
      const tasks = await getTasks();
      return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch tasks');
    }
  },
);

export const addTask = createAsyncThunk<TaskType, Omit<TaskType, 'id'>, { rejectValue: string }>(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const newTask = await createTask(task);
      return newTask;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to create task');
    }
  },
);

export const editTask = createAsyncThunk<
  TaskType,
  { id: string; updatedTask: Partial<TaskType> },
  { rejectValue: string }
>('tasks/editTask', async ({ id, updatedTask }, thunkAPI) => {
  try {
    const updated = await updateTask(id, updatedTask);
    return updated;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to update task');
  }
});

export const removeTask = createAsyncThunk<string, string, { rejectValue: string }>(
  'tasks/removeTask',
  async (id, thunkAPI) => {
    try {
      await deleteTask(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to delete task');
    }
  },
);
