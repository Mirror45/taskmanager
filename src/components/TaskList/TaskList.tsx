import React, { useState } from 'react';
import styles from './TaskList.module.css';
import TaskCard from '../Task/TaskCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import { RootState } from '../../store/store';
import { useAppSelector } from '../../store/hooks';
import { useTasks } from '../../hooks/useTasks';
import useSortedTasks from '../../hooks/useSortedTasks';
import useFilteredTasks from '../../hooks/useFilteredTasks';

const TaskList: React.FC = () => {
  const { tasks, loading, error } = useTasks();
  const [visibleCount, setVisibleCount] = useState(8);

  const sortOrder = useAppSelector((state: RootState) => state.sort.sortOrder);
  const sortedTasks = useSortedTasks(tasks, sortOrder);

  const filteredTasks = useFilteredTasks(sortedTasks);
  const visibleTasks = filteredTasks.slice(0, visibleCount);
  const hasMoreTasks = visibleCount < filteredTasks.length;

  const handleLoadMore = () => setVisibleCount((prev) => prev + 8);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tasks.length)
    return <p>Click &quot;ADD NEW TASK&quot; in menu to create your first task.</p>;

  return (
    <>
      <div className={styles.boardTasks}>
        {visibleTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <LoadMoreButton onLoadMore={handleLoadMore} hasMoreTasks={hasMoreTasks} />
    </>
  );
};

export default TaskList;
