import React, { useCallback } from 'react';
import styles from './TaskRepeatDays.module.css';
import { TaskRepeatDaysProps } from '../../types/task-repeat-days-props';
import { WEEKDAYS } from '../../constants';

const TaskRepeatDays: React.FC<TaskRepeatDaysProps> = ({ selectedDays, onDayChange }) => {
  const handleChange = useCallback((day: string) => () => onDayChange(day), [onDayChange]);

  return (
    <fieldset className={styles.repeatDays} aria-label="Select repeat days">
      <div className={styles.repeatDaysInner}>
        {WEEKDAYS.map((day) => (
          <>
            <input
              key={day}
              className={`visually-hidden ${styles.repeatDayInput}`}
              type="checkbox"
              id={`repeat-${day}`}
              name="repeat"
              value={day}
              checked={selectedDays.includes(day)}
              onChange={handleChange(day)}
            />
            <label className={styles.repeatDay} htmlFor={`repeat-${day}`}>
              {day}
            </label>
          </>
        ))}
      </div>
    </fieldset>
  );
};

export default TaskRepeatDays;
