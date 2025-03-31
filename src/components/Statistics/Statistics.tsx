import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { RootState } from '../../store/store';
import { setPeriod } from '../../store/slices/statisticsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchStatistics } from '../../store/thunks/statistics-thunks';
import { COLORS, COLOR_CODES } from '../../constants'; // Импортируем константы с цветами

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const Statistics: React.FC = () => {
  const dispatch = useAppDispatch();
  const { taskCount, tasksByColor, taskActivity } = useAppSelector(
    (state: RootState) => state.statistics,
  );
  const { startDate, endDate } = useAppSelector((state: RootState) => state.statistics);

  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [],
        borderColor: '#4bc0c0',
        backgroundColor: '#4bc0c0',
        fill: false,
        tension: 0.1,
      },
    ],
  });

  const chartRef = useRef<any>(null);

  useEffect(() => {
    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);

    const formattedToday = today.toISOString().split('T')[0];
    const formattedLastWeek = lastWeek.toISOString().split('T')[0];

    dispatch(setPeriod({ startDate: formattedLastWeek, endDate: formattedToday }));
    dispatch(fetchStatistics());
  }, [dispatch]);

  flatpickr('.statistic__period-start', {
    dateFormat: 'Y-m-d',
    defaultDate: startDate,
    onChange: (selectedDates) => {
      if (selectedDates.length > 0) {
        const start = selectedDates[0]?.toISOString().split('T')[0];
        dispatch(setPeriod({ startDate: start, endDate: endDate }));
        dispatch(fetchStatistics());
      }
    },
  });

  flatpickr('.statistic__period-end', {
    dateFormat: 'Y-m-d',
    defaultDate: endDate,
    onChange: (selectedDates) => {
      if (selectedDates.length > 0) {
        const end = selectedDates[0]?.toISOString().split('T')[0];
        dispatch(setPeriod({ startDate: startDate, endDate: end }));
        dispatch(fetchStatistics());
      }
    },
  });

  useEffect(() => {
    if (taskActivity.length > 0) {
      setChartData({
        labels: taskActivity.map((activity) => activity.date),
        datasets: [
          {
            label: 'Tasks Completed',
            data: taskActivity.map((activity) => activity.count),
            borderColor: '#4bc0c0',
            backgroundColor: '#4bc0c0',
            fill: false,
            tension: 0.1,
          },
        ],
      });
    }
  }, [taskActivity]);

  // Функция для получения соответствующего цветового кода по имени цвета
  const getColorCode = (colorName: string): string => {
    const index = COLORS.indexOf(colorName);
    return index !== -1 ? COLOR_CODES[index] : '#000000'; // Если не найдено, возвращаем чёрный
  };

  // Круговая диаграмма по цветам задач
  const dynamicColors = Object.keys(tasksByColor).map(
    (_color) => getColorCode(_color), // Получаем соответствующий цветовой код
  );

  const colorChartData = {
    labels: Object.keys(tasksByColor),
    datasets: [
      {
        label: 'Tasks by Color',
        data: Object.values(tasksByColor),
        backgroundColor: dynamicColors, // Применяем dynamicColors
      },
    ],
  };

  return (
    <section className="statistic container">
      <div className="statistic__line">
        <div className="statistic__period">
          <h2 className="statistic__period-title">Task Activity DIAGRAM</h2>
          <div className="statistic-input-wrap">
            <input className="statistic__period-start" type="text" placeholder="Start Date" />
            <input className="statistic__period-end" type="text" placeholder="End Date" />
          </div>
          <p className="statistic__period-result">
            In total for the specified period
            <span className="statistic__task-found">{taskCount}</span> tasks were fulfilled.
          </p>
        </div>
        <div className="statistic__line-graphic">
          <Line ref={chartRef} data={chartData} />
        </div>
      </div>
      <div className="statistic__circle">
        <Doughnut data={colorChartData} />
      </div>
    </section>
  );
};

export default Statistics;
