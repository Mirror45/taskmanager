import { createAsyncThunk } from '@reduxjs/toolkit';

import { createTask, deleteTask, getTasks, updateTask } from '../../api/api';
import { TaskType } from '../../types/task-types';
import { RootState } from '../store';

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

export const toggleFavoriteTask = createAsyncThunk<TaskType, string, { rejectValue: string }>(
  'tasks/toggleFavorite',
  async (taskId, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const task = state.tasks.tasks.find((task) => task.id === taskId);
      if (!task) throw new Error('Task not found');

      const updatedTask = { ...task, is_favorite: !task.is_favorite };

      const response = await updateTask(taskId, updatedTask);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to toggle favorite status');
    }
  },
);

export const toggleArchiveTask = createAsyncThunk<TaskType, string, { rejectValue: string }>(
  'tasks/toggleArchive',
  async (taskId, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const task = state.tasks.tasks.find((task) => task.id === taskId);
      if (!task) throw new Error('Task not found');

      const updatedTask = { ...task, is_archived: !task.is_archived };

      const response = await updateTask(taskId, updatedTask);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to toggle archive status');
    }
  },
);
