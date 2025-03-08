import React from 'react';

const TaskDate: React.FC = () => {
  return (
    <>
      <button className="card__date-deadline-toggle" type="button">
        date: <span className="card__date-status">yes</span>
      </button>

      <fieldset className="card__date-deadline">
        <label className="card__input-deadline-wrap" aria-label="Deadline date">
          <input
            className="card__date"
            type="text"
            placeholder=""
            name="date"
            value="23 September 16:15"
          />
        </label>
      </fieldset>

      <button className="card__repeat-toggle" type="button">
        repeat: <span className="card__repeat-status">no</span>
      </button>
    </>
  );
};

export default TaskDate;
