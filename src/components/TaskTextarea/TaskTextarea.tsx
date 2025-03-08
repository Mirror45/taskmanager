import React from 'react';

interface TaskTextareaProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TaskTextarea: React.FC<TaskTextareaProps> = ({ value, onChange }) => {
  return (
    <div className="card__textarea-wrap">
      <label aria-label="task-text">
        <textarea
          className="card__text"
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
