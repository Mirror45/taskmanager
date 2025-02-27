import React from 'react';
import TaskList from '../TaskList/TaskList';
import styles from './TaskBoard.module.css';
import TaskSort from '../TaskSort/TaskSort';

const TaskBoard: React.FC = () => {
  return (
    <div className={styles.taskBoard}>
      <TaskSort />
      <TaskList />
    </div>
  );
};

export default TaskBoard;
