import React from 'react';

interface TaskRepeatDaysProps {
  selectedDays: string[];
  // eslint-disable-next-line no-unused-vars
  onDayChange: (day: string) => void;
}

const TaskRepeatDays: React.FC<TaskRepeatDaysProps> = ({ selectedDays, onDayChange }) => {
  return (
    <fieldset className="card__repeat-days">
      <div className="card__repeat-days-inner">
        {['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'].map((day) => (
          <React.Fragment key={day}>
            <input
              className="visually-hidden card__repeat-day-input"
              type="checkbox"
              id={`repeat-${day}`}
              name="repeat"
              value={day}
              checked={selectedDays.includes(day)}
              onChange={() => onDayChange(day)}
            />
            <label className="card__repeat-day" htmlFor={`repeat-${day}`}>
              {day}
            </label>
          </React.Fragment>
        ))}
      </div>
    </fieldset>
  );
};

export default TaskRepeatDays;
