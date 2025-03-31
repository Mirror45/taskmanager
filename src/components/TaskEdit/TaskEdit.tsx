import React from 'react';

import styles from '../../common/TaskForm.module.css';
import { useEscape } from '../../hooks/useEscape';
import { useTaskForm } from '../../hooks/useTaskForm';
import { useAppDispatch } from '../../store/hooks';
import { editTask, removeTask } from '../../store/thunks/task-thunks';
import { TaskType } from '../../types/task-types';
import CancelButton from '../CancelButton/CancelButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import SaveButton from '../SaveButton/SaveButton';
import TaskColorBar from '../TaskColorBar/TaskColorBar';
import TaskColorPicker from '../TaskColorPicker/TaskColorPicker';
import TaskDate from '../TaskDate/TaskDate';
import TaskRepeatDays from '../TaskRepeatDays/TaskRepeatDays';
import TaskTextarea from '../TaskTextarea/TaskTextarea';

interface EditTaskProps {
  task: TaskType;
  onCancel: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({ task, onCancel }) => {
  const dispatch = useAppDispatch();

  const {
    text,
    selectedDays,
    selectedColor,
    taskDate,
    setTaskDate,
    isRecurring,
    isRepeatVisible,
    handleTextChange,
    handleDayChange,
    handleColorChange,
    handleRepeatToggle,
    toggleRepeatVisibility,
  } = useTaskForm(task);

  useEscape(onCancel);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave();
  };

  const handleSave = () => {
    if (!text.trim()) return;

    const updatedTask: TaskType = {
      ...task,
      color: selectedColor,
      description: text,
      due_date: isRecurring ? taskDate : null,
      repeating_days: isRecurring
        ? {
            mo: selectedDays.includes('mo'),
            tu: selectedDays.includes('tu'),
            we: selectedDays.includes('we'),
            th: selectedDays.includes('th'),
            fr: selectedDays.includes('fr'),
            sa: selectedDays.includes('sa'),
            su: selectedDays.includes('su'),
          }
        : {
            mo: false,
            tu: false,
            we: false,
            th: false,
            fr: false,
            sa: false,
            su: false,
          },
    };

    dispatch(editTask({ id: task.id, updatedTask }));
    onCancel();
  };

  const handleDelete = () => {
    dispatch(removeTask(task.id))
      .unwrap()
      .then(() => {
        onCancel();
      })
      .catch((error) => {
        console.error('Failed to delete task:', error);
      });
  };

  return (
    <article className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inner}>
          <TaskColorBar isRecurring={isRepeatVisible} selectedColor={selectedColor} />

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
                  <TaskRepeatDays
                    selectedDays={selectedDays}
                    onDayChange={handleDayChange}
                    isRepeatVisible={isRepeatVisible}
                    onToggleRepeat={toggleRepeatVisibility}
                  />
                )}
              </div>
            </div>

            <TaskColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />
          </div>

          <div className={styles.statusBtns}>
            <SaveButton />
            <CancelButton onCancel={onCancel} />
            <DeleteButton onDelete={handleDelete} />
          </div>
        </div>
      </form>
    </article>
  );
};

export default EditTask;
