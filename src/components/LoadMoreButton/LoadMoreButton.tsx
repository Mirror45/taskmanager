import React from 'react';
import styles from './LoadMoreButton.module.css';

interface LoadMoreButtonProps {
  onLoadMore: () => void;
  hasMoreTasks: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onLoadMore, hasMoreTasks }) => {
  if (!hasMoreTasks) return null;

  return (
    <button className={styles.loadMore} onClick={onLoadMore} type="button">
      load more
    </button>
  );
};

export default LoadMoreButton;
