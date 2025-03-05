import { useState } from 'react';

const usePagination = (tasks: any[], initialVisibleCount: number) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const visibleTasks = tasks.slice(0, visibleCount);
  const hasMoreTasks = visibleCount < tasks.length;

  const handleLoadMore = () => setVisibleCount((prev) => prev + 8);

  return { visibleTasks, hasMoreTasks, handleLoadMore };
};

export default usePagination;
