import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { FilterType } from '../types/filter';

export const useTaskCounts = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return {
    [FilterType.All]: tasks.filter((task) => !task.is_archived).length,
    [FilterType.Overdue]: tasks.filter(
      (task) => new Date(task.due_date) < new Date() && !task.is_archived,
    ).length,
    [FilterType.Today]: tasks.filter(
      (task) =>
        new Date(task.due_date).toDateString() === new Date().toDateString() && !task.is_archived,
    ).length,
    [FilterType.Favorites]: tasks.filter((task) => task.is_favorite && !task.is_archived).length,
    [FilterType.Repeating]: tasks.filter(
      (task) => Object.values(task.repeating_days).includes(true) && !task.is_archived,
    ).length,
    [FilterType.Archive]: tasks.filter((task) => task.is_archived).length,
  };
};
