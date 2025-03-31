import React from 'react';

import { COLORS } from '../../constants';
import { TaskColorPickerProps } from '../../types/task-color-picker-props';

import styles from './TaskColorPicker.module.css';

const TaskColorPicker: React.FC<TaskColorPickerProps> = ({ selectedColor, onColorChange }) => {
  return (
    <div className={styles.colorsInner}>
      <h3 className={styles.colorsTitle}>Color</h3>
      <div className={styles.colorsWrap}>
        {COLORS.map((color) => (
          <React.Fragment key={color}>
            <input
              key={color}
              type="radio"
              id={`color-${color}`}
              className={`${styles.colorInput} visually-hidden`}
              name="color"
              value={color}
              checked={selectedColor === color}
              onChange={() => onColorChange(color)}
              style={{ color }}
            />
            <label
              className={`${styles.color} ${styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`]}`}
              htmlFor={`color-${color}`}
            >
              {color}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TaskColorPicker;
