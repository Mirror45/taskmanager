import React, { useState } from 'react';
import TaskColorPicker from '../TaskColorPicker/TaskColorPicker';
import TaskRepeatDays from '../TaskRepeatDays/TaskRepeatDays';
import TaskTextarea from '../TaskTextarea/TaskTextarea';
import TaskDate from '../TaskDate/TaskDate';
import SaveButton from '../SaveButton/SaveButton';
import CancelButton from '../CancelButton/CancelButton';
import styles from '../../common/TaskForm.module.css';

const AddNewTask: React.FC = () => {
  const [text, setText] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [taskDate, setTaskDate] = useState<string>('');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

  const handleDayChange = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleRepeatToggle = () => {
    setIsRecurring((prev) => !prev);
  };

  const handleCancel = () => {
    console.log('Task creation canceled');
  };

  const handleSave = () => {
    console.log('Task saved');
  };

  return (
    <article className={styles.card}>
      <form className="card__form">
        <div className={styles.inner}>
          <div
            className={`${styles.colorBar} ${isRecurring ? styles.wavy : ''}
          ${styles[`colorBar${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}`]}
          `}
          ></div>

          <TaskTextarea value={text} onChange={handleTextChange} />

          <div className={styles.settings}>
            <div className={styles.details}>
              <div className={styles.dates}>
                <TaskDate
                  value={taskDate}
                  onChange={setTaskDate}
                  isRecurring={isRecurring}
                  onRepeatToggle={handleRepeatToggle}
                />
                {isRecurring && (
                  <TaskRepeatDays selectedDays={selectedDays} onDayChange={handleDayChange} />
                )}
              </div>
            </div>

            <TaskColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />
          </div>

          <div className={styles.statusBtns}>
            <SaveButton onSave={handleSave} />
            <CancelButton onCancel={handleCancel} />
          </div>
        </div>
      </form>
    </article>
  );
};

export default AddNewTask;
