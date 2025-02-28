import React from 'react';
import styles from './TaskControl.module.css';

const TaskControl: React.FC = () => {
  return (
    <section className={`${styles.mainControl} ${styles.control}`}>
      <h1 className={styles.controlTitle}>TASKMANAGER</h1>
      <section className={styles.controlBtnWrap}>
        <input
          type="radio"
          name="control"
          id="controlNewTask"
          className={`${styles.controlInput} visually-hidden`}
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
        />
        <label htmlFor="controlTask" className={styles.controlLabel}>
          TASKS
        </label>

        <input
          type="radio"
          name="control"
          id="controlStatistic"
          className={`${styles.controlInput} visually-hidden`}
          defaultChecked
        />
        <label htmlFor="controlStatistic" className={styles.controlLabel}>
          STATISTICS
        </label>
      </section>
    </section>
  );
};

export default TaskControl;
