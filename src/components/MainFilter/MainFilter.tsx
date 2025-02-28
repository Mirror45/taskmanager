import React from 'react';
import styles from './MainFilter.module.css';

const MainFilter: React.FC = () => {
  return (
    <section className={`${styles.mainFilter} ${styles.filter} ${styles.container}`}>
      <input
        type="radio"
        id="filter__all"
        className={`${styles.filterInput} ${styles.visuallyHidden}`}
        name="filter"
        defaultChecked
      />
      <label htmlFor="filter__all" className={styles.filterLabel}>
        All <span className={styles.filterAllCount}>13</span>
      </label>

      <input
        type="radio"
        id="filter__overdue"
        className={`${styles.filterInput} ${styles.visuallyHidden}`}
        name="filter"
        disabled
      />
      <label htmlFor="filter__overdue" className={styles.filterLabel}>
        Overdue <span className={styles.filterOverdueCount}>0</span>
      </label>

      <input
        type="radio"
        id="filter__today"
        className={`${styles.filterInput} ${styles.visuallyHidden}`}
        name="filter"
        disabled
      />
      <label htmlFor="filter__today" className={styles.filterLabel}>
        Today <span className={styles.filterTodayCount}>0</span>
      </label>

      <input
        type="radio"
        id="filter__favorites"
        className={`${styles.filterInput} ${styles.visuallyHidden}`}
        name="filter"
      />
      <label htmlFor="filter__favorites" className={styles.filterLabel}>
        Favorites <span className={styles.filterFavoritesCount}>1</span>
      </label>

      <input
        type="radio"
        id="filter__repeating"
        className={`${styles.filterInput} ${styles.visuallyHidden}`}
        name="filter"
      />
      <label htmlFor="filter__repeating" className={styles.filterLabel}>
        Repeating <span className={styles.filterRepeatingCount}>1</span>
      </label>

      <input
        type="radio"
        id="filter__archive"
        className={`${styles.filterInput} ${styles.visuallyHidden}`}
        name="filter"
      />
      <label htmlFor="filter__archive" className={styles.filterLabel}>
        Archive <span className={styles.filterArchiveCount}>115</span>
      </label>
    </section>
  );
};

export default MainFilter;
