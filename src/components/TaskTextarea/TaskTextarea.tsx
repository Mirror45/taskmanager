import React, { useState } from 'react';

import { TaskTextareaProps } from '../../types/task-textarea-props';

import styles from './TaskTextarea.module.css';

const TaskTextarea: React.FC<TaskTextareaProps> = ({ value, onChange }) => {
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length < 1) {
      setError('The task description cannot be empty.');
    } else if (inputValue.length > 139) {
      setError('The task description cannot exceed 140 characters.');
    } else {
      setError('');
    }

    onChange(event);
  };

  return (
    <div className={styles.textareaWrap}>
      <label aria-label="task-text">
        <textarea
          className={`${styles.text} ${error ? styles.error : ''}`}
          placeholder="Start typing your text here..."
          name="text"
          id="task-text"
          value={value}
          onChange={handleChange}
          minLength={1}
          maxLength={140}
        />
      </label>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default TaskTextarea;
