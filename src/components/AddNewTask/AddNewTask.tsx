import React from 'react';
import TaskColorPicker from '../TaskColorPicker/TaskColorPicker';
import TaskRepeatDays from '../TaskRepeatDays/TaskRepeatDays';
import TaskTextarea from '../TaskTextarea/TaskTextarea';
import TaskDate from '../TaskDate/TaskDate';
import SaveButton from '../SaveButton/SaveButton';
import CancelButton from '../CancelButton/CancelButton';
import styles from '../../common/TaskForm.module.css';
import TaskColorBar from '../TaskColorBar/TaskColorBar';
import { useAppDispatch } from '../../store/hooks';
import { closeAddTaskForm } from '../../store/slices/taskFormSlice';
import { addTask } from '../../store/thunks/task-thunks';
import { useTaskForm } from '../../hooks/useTaskForm';

const AddNewTask: React.FC = () => {
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
  } = useTaskForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave();
  };

  const handleCancel = () => {
    dispatch(closeAddTaskForm());
  };

  const handleSave = () => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      color: selectedColor,
      description: text,
      due_date: isRecurring ? taskDate : null,
      is_archived: false,
      is_favorite: false,
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

    dispatch(addTask(newTask));
    dispatch(closeAddTaskForm());
  };

  const isSaveDisabled = isRecurring ? selectedDays.length === 0 : text.trim() === '';

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
            <SaveButton disabled={isSaveDisabled} />
            <CancelButton onCancel={handleCancel} />
          </div>
        </div>
      </form>
    </article>
  );
};

export default AddNewTask;
