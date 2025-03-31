import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatisticsState {
  startDate: string;
  endDate: string;
  taskCount: number;
  tasksByColor: Record<string, number>;
  taskActivity: { date: string; count: number }[];
}

const initialState: StatisticsState = {
  startDate: '',
  endDate: '',
  taskCount: 0,
  tasksByColor: {},
  taskActivity: [],
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setPeriod: (state, action: PayloadAction<{ startDate: string; endDate: string }>) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
    setStatisticsData: (state, action: PayloadAction<StatisticsState>) => {
      state.taskCount = action.payload.taskCount;
      state.tasksByColor = action.payload.tasksByColor;
      state.taskActivity = action.payload.taskActivity;
      state.startDate = action.payload.startDate; // Добавляем startDate
      state.endDate = action.payload.endDate; // Добавляем endDate
    },
  },
});

export const { setPeriod, setStatisticsData } = statisticsSlice.actions;
export default statisticsSlice.reducer;
