import React from 'react';
import TaskList from '../TaskList/TaskList';
import styles from './TaskBoard.module.css';
import TaskFilter from '../TaskFilter/TaskFilter';

const TaskBoard: React.FC = () => {
  return (
    <div className={styles.taskBoard}>
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default TaskBoard;
