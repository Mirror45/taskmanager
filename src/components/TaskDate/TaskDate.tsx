import React from 'react';
import styles from './TaskDate.module.css';
import { TaskDateProps } from '../../types/task-date-props';

const TaskDate: React.FC<TaskDateProps> = ({
  value = '',
  onChange,
  isRecurring,
  onRepeatToggle,
}) => {
  return (
    <>
      <button className={styles.dateDeadlineToggle} type="button" onClick={onRepeatToggle}>
        date: <span className={styles.dateStatus}>{isRecurring ? 'yes' : 'no'}</span>
      </button>

      {isRecurring && (
        <fieldset className={styles.dateDeadline}>
          <label className={styles.inputDeadlineWrap} aria-label="Deadline date">
            <input
              className={styles.date}
              type="text"
              placeholder="Select date"
              name="date"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </label>
        </fieldset>
      )}
    </>
  );
};

export default TaskDate;
