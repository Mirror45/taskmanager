import React, { useEffect, useState } from 'react';
import styles from './TaskList.module.css';
import TaskCard from '../Task/TaskCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import { fetchTasks } from '../../store/thunks/task-thunks';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';

const TaskList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    if (!loading && tasks.length === 0) {
      dispatch(fetchTasks());
    }
  }, [dispatch, loading, tasks.length]);

  const visibleTasks = tasks.slice(0, visibleCount);
  const hasMoreTasks = visibleCount < tasks.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;
  if (tasks.length === 0)
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
