import React from 'react';
import styles from './LoadMoreButton.module.css';

const TaskBoard: React.FC = () => {
  return (
    <button className={styles.loadMore} type="button">
      load more
    </button>
  );
};

export default TaskBoard;
