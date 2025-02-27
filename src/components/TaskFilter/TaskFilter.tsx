import React from 'react';
import styles from './TaskFilter.module.css';

const TaskBoard: React.FC = () => {
  return (
    <div className={styles.filterList}>
      <a href="/tasks?sort=default" className={styles.boardFilter}>
        SORT BY DEFAULT
      </a>
      <a href="/tasks?sort=date-up" className={styles.boardFilter}>
        SORT BY DATE up
      </a>
      <a href="/tasks?sort=date-down" className={styles.boardFilter}>
        SORT BY DATE down
      </a>
    </div>
  );
};

export default TaskBoard;
