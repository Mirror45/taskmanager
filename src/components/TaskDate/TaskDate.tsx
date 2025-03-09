import React from 'react';
import styles from './TaskDate.module.css';

const TaskDate: React.FC = () => {
  return (
    <>
      <button className={styles.dateDeadlineToggle} type="button">
        date: <span className={styles.dateStatus}>yes</span>
      </button>

      <fieldset className={styles.dateDeadline}>
        <label className={styles.inputDeadlineWrap} aria-label="Deadline date">
          <input
            className={styles.date}
            type="text"
            placeholder=""
            name="date"
            value="23 September 16:15"
          />
        </label>
      </fieldset>
    </>
  );
};

export default TaskDate;
