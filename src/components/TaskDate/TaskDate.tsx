import React from 'react';
import styles from './TaskDate.module.css';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { TaskDateProps } from '../../types/task-date-props';

const TaskDate: React.FC<TaskDateProps> = ({
  value = '',
  onChange,
  isRecurring,
  onRepeatToggle,
}) => {
  const dateValue = value ? new Date(value) : new Date();

  return (
    <>
      <button className={styles.dateDeadlineToggle} type="button" onClick={onRepeatToggle}>
        date: <span className={styles.dateStatus}>{isRecurring ? 'yes' : 'no'}</span>
      </button>

      {isRecurring && (
        <fieldset className={styles.dateDeadline}>
          <label className={styles.inputDeadlineWrap} htmlFor="task-date">
            <span className="visually-hidden">Deadline date</span>
          </label>
          <Flatpickr
            id="task-date"
            className={styles.date}
            placeholder="Select date"
            value={dateValue}
            options={{
              dateFormat: 'd F Y',
              allowInput: true,
              locale: { firstDayOfWeek: 1 },
            }}
            onChange={(dates: Date[]) => {
              if (dates[0]) {
                onChange(dates[0].toISOString());
              }
            }}
          />
        </fieldset>
      )}
    </>
  );
};

export default TaskDate;
