import React, { useState } from 'react';
import TaskColorPicker from '../TaskColorPicker/TaskColorPicker';
import TaskRepeatDays from '../TaskRepeatDays/TaskRepeatDays';

const AddNewTask: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState('black');

  const handleDayChange = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <article className="card card--edit card--black">
      <form className="card__form">
        <div className="card__inner">
          <div className="card__color-bar">
            <svg width="100%" height="10">
              <use xlinkHref="#wave"></use>
            </svg>
          </div>

          <div className="card__textarea-wrap">
            <label aria-label="Task text">
              <textarea
                className="card__text"
                placeholder="Start typing your text here..."
                name="text"
                defaultValue="This is example of new task. You can set date and choose repeating days and color."
              />
            </label>
          </div>

          <div className="card__settings">
            <div className="card__details">
              <div className="card__dates">
                <button className="card__date-deadline-toggle" type="button">
                  date: <span className="card__date-status">no</span>
                </button>

                <fieldset className="card__date-deadline" disabled>
                  <label className="card__input-deadline-wrap" aria-label="Deadline date">
                    <input
                      className="card__date"
                      type="text"
                      placeholder="23 September"
                      name="date"
                    />
                  </label>
                </fieldset>

                <button className="card__repeat-toggle" type="button">
                  repeat: <span className="card__repeat-status">no</span>
                </button>

                <TaskRepeatDays selectedDays={selectedDays} onDayChange={handleDayChange} />
              </div>
            </div>

            <TaskColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />
          </div>

          <div className="card__status-btns">
            <button className="card__save" type="submit">
              save
            </button>
            <button className="card__delete" type="button">
              cancel
            </button>
          </div>
        </div>
      </form>
    </article>
  );
};

export default AddNewTask;
