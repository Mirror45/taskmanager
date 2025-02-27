import React from 'react';
import styles from './TaskSort.module.css';

const TaskSort: React.FC = () => {
  return (
    <div className={styles.sortList}>
      <a href="/tasks?sort=default" className={styles.boardSort}>
        SORT BY DEFAULT
      </a>
      <a href="/tasks?sort=date-up" className={styles.boardSort}>
        SORT BY DATE up
      </a>
      <a href="/tasks?sort=date-down" className={styles.boardSort}>
        SORT BY DATE down
      </a>
    </div>
  );
};

export default TaskSort;
