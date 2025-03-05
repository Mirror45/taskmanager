import React, { useState } from 'react';
import styles from './TaskList.module.css';
import TaskCard from '../Task/TaskCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import { useTasks } from '../../hooks/useTasks';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { FilterType } from '../../types/filter';
import { TaskType } from '../../types/task-types';

const filterTasks = (tasks: TaskType[], activeFilter: FilterType) => {
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

const TaskList: React.FC = () => {
  const { tasks, loading, error } = useTasks();
  const activeFilter = useSelector((state: RootState) => state.filter.activeFilter);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredTasks = filterTasks(tasks, activeFilter);
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
