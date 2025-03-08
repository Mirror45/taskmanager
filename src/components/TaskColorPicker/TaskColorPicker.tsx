import React from 'react';

interface TaskColorPickerProps {
  selectedColor: string;
  // eslint-disable-next-line no-unused-vars
  onColorChange: (color: string) => void;
}

const TaskColorPicker: React.FC<TaskColorPickerProps> = ({ selectedColor, onColorChange }) => {
  return (
    <div className="card__colors-inner">
      <h3 className="card__colors-title">Color</h3>
      <div className="card__colors-wrap">
        {['black', 'yellow', 'blue', 'green', 'pink'].map((color) => (
          <React.Fragment key={color}>
            <input
              type="radio"
              id={`color-${color}`}
              className={`card__color-input card__color-input--${color} visually-hidden`}
              name="color"
              value={color}
              checked={selectedColor === color}
              onChange={() => onColorChange(color)}
            />
            <label className={`card__color card__color--${color}`} htmlFor={`color-${color}`}>
              {color}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TaskColorPicker;
