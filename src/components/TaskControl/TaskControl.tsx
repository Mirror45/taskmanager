import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks';
import { toggleAddTaskForm } from '../../store/slices/taskFormSlice';
import { setEditTaskId } from '../../store/slices/taskSlice';

import styles from './TaskControl.module.css';

const TaskControl: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddNewTaskClick = () => {
    dispatch(setEditTaskId(null));
    dispatch(toggleAddTaskForm());
  };

  return (
    <section className={`${styles.mainControl} ${styles.control}`}>
      <h1 className={styles.controlTitle}>TASKMANAGER</h1>
      <section className={styles.controlBtnWrap}>
        <input
          type="radio"
          name="control"
          id="controlNewTask"
          className={`${styles.controlInput} visually-hidden`}
          onClick={handleAddNewTaskClick}
        />
        <label
          htmlFor="controlNewTask"
          className={`${styles.controlLabel} ${styles.controlLabelNewTask}`}
        >
          + ADD NEW TASK
        </label>

        <input
          type="radio"
          name="control"
          id="controlTask"
          className={`${styles.controlInput} visually-hidden`}
          checked={location.pathname === '/tasks'}
          onChange={() => navigate('/tasks')}
        />
        <label htmlFor="controlTask" className={styles.controlLabel}>
          TASKS
        </label>

        <input
          type="radio"
          name="control"
          id="controlStatistic"
          className={`${styles.controlInput} visually-hidden`}
          checked={location.pathname === '/statistics'}
          onChange={() => navigate('/statistics')}
        />
        <label htmlFor="controlStatistic" className={styles.controlLabel}>
          STATISTICS
        </label>
      </section>
    </section>
  );
};

export default TaskControl;
