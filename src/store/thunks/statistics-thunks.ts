import { createAsyncThunk } from '@reduxjs/toolkit';
import { setStatisticsData } from '../slices/statisticsSlice';
import { RootState } from '../store';
import axiosInstance from '../../utils/axiosInstance';

interface Task {
  id: string;
  color: string;
  due_date: string;
}

export const fetchStatistics = createAsyncThunk<
  void,
  void,
  { rejectValue: string; state: RootState }
>('statistics/fetchStatistics', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const { startDate, endDate } = state.statistics;

    if (!startDate || !endDate) {
      return thunkAPI.rejectWithValue('Start and end date are required');
    }

    // Получаем задачи
    const response = await axiosInstance.get<Task[]>('tasks');
    const tasks = response.data;

    // Фильтруем задачи по диапазону дат
    const filteredTasks = tasks.filter((task) => {
      const taskDate = task.due_date.split('T')[0]; // Обрезаем, если дата в ISO
      return taskDate >= startDate && taskDate <= endDate;
    });

    // Подсчет количества задач
    const taskCount = filteredTasks.length;

    // Группировка по цвету
    const tasksByColor: Record<string, number> = {};
    filteredTasks.forEach((task) => {
      tasksByColor[task.color] = (tasksByColor[task.color] || 0) + 1;
    });

    // Статистика активности (количество задач по дням)
    const taskActivity: Record<string, number> = {};
    filteredTasks.forEach((task) => {
      const date = task.due_date.split('T')[0];
      taskActivity[date] = (taskActivity[date] || 0) + 1;
    });

    // Преобразуем в массив [{ date: '2025-04-01', count: 3 }, ...]
    const taskActivityArray = Object.entries(taskActivity).map(([date, count]) => ({
      date,
      count,
    }));

    // Обновляем стейт
    thunkAPI.dispatch(
      setStatisticsData({
        taskCount,
        tasksByColor,
        taskActivity: taskActivityArray,
        startDate,
        endDate,
      }),
    );
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch statistics');
  }
});
