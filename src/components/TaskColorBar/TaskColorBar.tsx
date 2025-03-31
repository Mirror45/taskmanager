import React from 'react';

import styles from './TaskColorBar.module.css';

interface TaskColorBarProps {
  isRecurring: boolean;
  selectedColor: string;
}

const TaskColorBar: React.FC<TaskColorBarProps> = ({ isRecurring, selectedColor }) => {
  return (
    <div
      className={`${styles.colorBar} ${isRecurring ? styles.wavy : ''} 
        ${styles[`colorBar${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}`]}`}
    ></div>
  );
};

export default TaskColorBar;
