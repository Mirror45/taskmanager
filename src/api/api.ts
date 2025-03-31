import { TaskType } from '../types/task-types';
import axiosInstance from '../utils/axiosInstance';
import { handleError } from '../utils/errorHandler';

export const getTasks = async (): Promise<TaskType[]> => {
  try {
    const response = await axiosInstance.get<TaskType[]>('tasks');
    return response.data;
  } catch (error) {
    const { message, status } = handleError(error);
    console.error(`Error fetching tasks (status: ${status}): ${message}`);
    throw new Error(message);
  }
};

export const createTask = async (task: Omit<TaskType, 'id'>): Promise<TaskType> => {
  try {
    const response = await axiosInstance.post<TaskType>('tasks', task);
    return response.data;
  } catch (error) {
    const { message, status } = handleError(error);
    console.error(`Error creating task (status: ${status}): ${message}`);
    throw new Error(message);
  }
};

export const updateTask = async (id: string, updatedTask: Partial<TaskType>): Promise<TaskType> => {
  try {
    const response = await axiosInstance.put<TaskType>(`tasks/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    const { message, status } = handleError(error);
    console.error(`Error updating task (status: ${status}): ${message}`);
    throw new Error(message);
  }
};

export const deleteTask = async (id: string): Promise<void> => {
  try {
    await axiosInstance.delete(`tasks/${id}`);
  } catch (error) {
    const { message, status } = handleError(error);
    console.error(`Error deleting task (status: ${status}): ${message}`);
    throw new Error(message);
  }
};
