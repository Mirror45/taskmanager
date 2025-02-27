import React from 'react';
import TaskList from '../TaskList/TaskList';
import styles from './TaskBoard.module.css';

const TaskBoard: React.FC = () => {
  return (
    <div className={styles.taskBoard}>
      <TaskList />
    </div>
  );
};

export default TaskBoard;
