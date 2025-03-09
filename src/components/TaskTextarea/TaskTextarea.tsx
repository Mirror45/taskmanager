import React from 'react';
import styles from './TaskTextarea.module.css';
import { TaskTextareaProps } from '../../types/task-textarea-props';

const TaskTextarea: React.FC<TaskTextareaProps> = ({ value, onChange }) => {
  return (
    <div className={styles.textareaWrap}>
      <label aria-label="task-text">
        <textarea
          className={styles.text}
          placeholder="Start typing your text here..."
          name="text"
          id="task-text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default TaskTextarea;
