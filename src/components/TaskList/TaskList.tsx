import React from 'react';
import AddNewTask from '../AddNewTask/AddNewTask';
import styles from './TaskList.module.css';
import TaskCard from '../Task/TaskCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useTasks } from '../../hooks/useTasks';
import useSortedTasks from '../../hooks/useSortedTasks';
import useFilteredTasks from '../../hooks/useFilteredTasks';
import usePagination from '../../hooks/usePagination';
import { setEditTaskId, setIsAddingTask } from '../../store/slices/taskSlice';
import EditTask from '../TaskEdit/TaskEdit';
import { toggleAddTaskForm } from '../../store/slices/taskFormSlice';

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tasks, loading, error } = useTasks();

  const sortOrder = useAppSelector((state: RootState) => state.sort.sortOrder);
  const editTaskId = useAppSelector((state: any) => state.tasks.editTaskId);
  const isAddingTask = useAppSelector((state: RootState) => state.taskForm.isAddingTask);

  const sortedTasks = useSortedTasks(tasks, sortOrder);
  const filteredTasks = useFilteredTasks(sortedTasks);
  const { visibleTasks, hasMoreTasks, handleLoadMore } = usePagination(filteredTasks, 8);

  const handleEditTask = (taskId: string) => {
    if (isAddingTask) {
      dispatch(toggleAddTaskForm());
      dispatch(setIsAddingTask(false));
    }
    dispatch(setEditTaskId(taskId));
  };

  const handleCancelEdit = () => {
    dispatch(setEditTaskId(null));
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tasks.length)
    return <p>Click &quot;ADD NEW TASK&quot; in menu to create your first task.</p>;

  return (
    <>
      {isAddingTask && <AddNewTask />}

      <div className={styles.boardTasks}>
        {visibleTasks.map((task) => (
          <div key={task.id}>
            {editTaskId === task.id ? (
              <EditTask task={task} onCancel={handleCancelEdit} />
            ) : (
              <TaskCard task={task} onEdit={() => handleEditTask(task.id)} />
            )}
          </div>
        ))}
      </div>
      <LoadMoreButton onLoadMore={handleLoadMore} hasMoreTasks={hasMoreTasks} />
    </>
  );
};

export default TaskList;
