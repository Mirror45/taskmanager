import React, { useState } from 'react';
import TaskColorPicker from '../TaskColorPicker/TaskColorPicker';
import TaskRepeatDays from '../TaskRepeatDays/TaskRepeatDays';
import TaskTextarea from '../TaskTextarea/TaskTextarea';
import TaskDate from '../TaskDate/TaskDate';

const AddNewTask: React.FC = () => {
  const [text, setText] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState('black');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

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

          <TaskTextarea value={text} onChange={handleTextChange} />

          <div className="card__settings">
            <div className="card__details">
              <div className="card__dates">
                <TaskDate />
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
