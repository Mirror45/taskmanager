import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFilter } from '../../store/slices/filtersSlice';
import { FilterType } from '../../types/filter';
import { useTaskCounts } from '../../hooks/useTaskCounts';
import styles from './MainFilter.module.css';

const filters = [
  { type: FilterType.All, label: 'All' },
  { type: FilterType.Overdue, label: 'Overdue' },
  { type: FilterType.Today, label: 'Today' },
  { type: FilterType.Favorites, label: 'Favorites' },
  { type: FilterType.Repeating, label: 'Repeating' },
  { type: FilterType.Archive, label: 'Archive' },
];

const MainFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector((state) => state.filter.activeFilter);
  const taskCounts = useTaskCounts();

  return (
    <section className={`${styles.mainFilter} ${styles.filter}`}>
      {filters.map(({ type, label }) => (
        <div key={type} className={styles.filterItem}>
          <input
            type="radio"
            id={`filter__${type}`}
            className={`${styles.filterInput} visually-hidden`}
            name="filter"
            checked={activeFilter === type}
            onChange={() => dispatch(setFilter(type))}
            disabled={taskCounts[type] === 0}
          />
          <label htmlFor={`filter__${type}`} className={styles.filterLabel}>
            {label} <span className={styles.filterCount}>{taskCounts[type]}</span>
          </label>
        </div>
      ))}
    </section>
  );
};

export default MainFilter;
