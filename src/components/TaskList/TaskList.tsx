import React from 'react';
import styles from './TaskList.module.css';
import Task from '../Task/Task';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

const TaskList: React.FC = () => {
  return (
    <>
      <div className={styles.boardTasks}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Task key={index} />
        ))}
      </div>
      <LoadMoreButton />
    </>
  );
};

export default TaskList;
