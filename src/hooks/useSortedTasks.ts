import { useMemo } from 'react';

import { TaskType } from '../types/task-types';

const useSortedTasks = (tasks: TaskType[], sortOrder: 'default' | 'date-up' | 'date-down') => {
  return useMemo(() => {
    return [...tasks].sort((a, b) => {
      const dueDateA = a.due_date ? new Date(a.due_date).getTime() : Infinity;
      const dueDateB = b.due_date ? new Date(b.due_date).getTime() : Infinity;

      if (sortOrder === 'date-up') {
        return dueDateA - dueDateB;
      }
      if (sortOrder === 'date-down') {
        return dueDateB - dueDateA;
      }
      return 0;
    });
  }, [tasks, sortOrder]);
};

export default useSortedTasks;
