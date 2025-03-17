import React, { useCallback } from 'react';
import styles from './TaskRepeatDays.module.css';
import { TaskRepeatDaysProps } from '../../types/task-repeat-days-props';
import { WEEKDAYS } from '../../constants';

const TaskRepeatDays: React.FC<TaskRepeatDaysProps> = ({
  selectedDays,
  onDayChange,
  isRepeatVisible,
  onToggleRepeat,
}) => {
  const handleChange = useCallback((day: string) => () => onDayChange(day), [onDayChange]);

  return (
    <>
      <button className={styles.repeatToggle} type="button" onClick={onToggleRepeat}>
        repeat: <span className={styles.repeatStatus}>{isRepeatVisible ? 'yes' : 'no'}</span>
      </button>

      {isRepeatVisible && (
        <fieldset className={styles.repeatDays} aria-label="Select repeat days">
          <div className={styles.repeatDaysInner}>
            {WEEKDAYS.map((day) => (
              <React.Fragment key={day}>
                <input
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
              </React.Fragment>
            ))}
          </div>
        </fieldset>
      )}
    </>
  );
};

export default TaskRepeatDays;
