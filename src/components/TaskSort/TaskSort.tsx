import React from 'react';
import { RootState } from '../../store/store';
import { setSortOrder } from '../../store/slices/sortSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './TaskSort.module.css';
import useResetSortOnFilterChange from '../../hooks/useResetSortOnFilterChange';

const TaskSort: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortOrder = useAppSelector((state: RootState) => state.sort.sortOrder);

  useResetSortOnFilterChange();

  const handleSortChange = (order: 'default' | 'date-up' | 'date-down') => {
    dispatch(setSortOrder(order));
  };

  return (
    <div className={styles.sortList}>
      <button
        onClick={() => handleSortChange('default')}
        className={`${styles.boardSort} ${sortOrder === 'default' ? styles.boardSortActive : ''}`}
        disabled={sortOrder === 'default'}
      >
        SORT BY DEFAULT
      </button>
      <button
        onClick={() => handleSortChange('date-up')}
        className={`${styles.boardSort} ${sortOrder === 'date-up' ? styles.boardSortActive : ''}`}
        disabled={sortOrder === 'date-up'}
      >
        SORT BY DATE up
      </button>
      <button
        onClick={() => handleSortChange('date-down')}
        className={`${styles.boardSort} ${sortOrder === 'date-down' ? styles.boardSortActive : ''}`}
        disabled={sortOrder === 'date-down'}
      >
        SORT BY DATE down
      </button>
    </div>
  );
};

export default TaskSort;
