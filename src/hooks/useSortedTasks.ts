import { useMemo } from 'react';
import { TaskType } from '../types/task-types';

const useSortedTasks = (tasks: TaskType[], sortOrder: 'default' | 'date-up' | 'date-down') => {
  return useMemo(() => {
    if (sortOrder === 'date-up') {
      return [...tasks].sort(
        (a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime(),
      );
    }
    if (sortOrder === 'date-down') {
      return [...tasks].sort(
        (a, b) => new Date(b.due_date).getTime() - new Date(a.due_date).getTime(),
      );
    }
    return tasks;
  }, [tasks, sortOrder]);
};

export default useSortedTasks;
