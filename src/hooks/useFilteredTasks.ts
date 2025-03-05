import { useAppSelector } from '../store/hooks';
import { FilterType } from '../types/filter';
import { TaskType } from '../types/task-types';

const useFilteredTasks = (tasks: TaskType[]) => {
  const activeFilter = useAppSelector((state) => state.filter.activeFilter);

  return tasks.filter((task) => {
    if (activeFilter === FilterType.All) return !task.is_archived;
    if (activeFilter === FilterType.Overdue)
      return new Date(task.due_date) < new Date() && !task.is_archived;
    if (activeFilter === FilterType.Today)
      return (
        new Date(task.due_date).toDateString() === new Date().toDateString() && !task.is_archived
      );
    if (activeFilter === FilterType.Favorites) return task.is_favorite && !task.is_archived;
    if (activeFilter === FilterType.Repeating)
      return Object.values(task.repeating_days).includes(true) && !task.is_archived;
    if (activeFilter === FilterType.Archive) return task.is_archived;
    return true;
  });
};

export default useFilteredTasks;
