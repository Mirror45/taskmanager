import React from 'react';
import styles from './TaskCard.module.css';
import { TaskCardProps } from '../../types/task-card-props';
import { useAppDispatch } from '../../store/hooks';
import { toggleArchiveTask, toggleFavoriteTask } from '../../store/thunks/task-thunks';

const Task: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const handleFavoriteToggle = () => {
    dispatch(toggleFavoriteTask(task.id));
  };

  const handleArchiveToggle = () => {
    dispatch(toggleArchiveTask(task.id));
  };

  const dueDate = new Date(task.due_date);
  const currentDate = new Date();
  const isOverdue = dueDate < currentDate;

  const colorClass = styles[task.color] || '';
  const deadlineClass = isOverdue ? styles.deadline : '';
  const cardColorBarClass = isOverdue ? styles.cardDeadline : '';

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-GB', options);
  };

  const formattedDate = formatDate(dueDate);

  return (
    <article className={`${styles.card} ${cardColorBarClass}`}>
      <div className="card__form">
        <div className={styles.cardInner}>
          <div className={styles.cardControl}>
            <button type="button" className={`${styles.cardBtn} ${styles.cardBtnEdit}`}>
              edit
            </button>
            <button
              type="button"
              className={`${styles.cardBtn} ${styles.cardBtnArchive} ${task.is_favorite ? styles.cardBtnDisabled : ''}`}
              onClick={handleFavoriteToggle}
            >
              {task.is_favorite ? 'Unfavorite' : 'Favorite'}
            </button>
            <button
              type="button"
              className={`${styles.cardBtn} ${task.is_archived ? styles.cardBtnDisabled : ''}`}
              onClick={handleArchiveToggle}
            >
              {task.is_archived ? 'Unarchive' : 'Archive'}
            </button>
          </div>

          <div className={`${styles.cardColorBar} ${colorClass} ${deadlineClass}`}>
            <svg className="card__color-bar-wave" width="100%" height="10">
              <use xlinkHref="#wave"></use>
            </svg>
          </div>

          <div className={styles.textareaWrap}>
            <p className={styles.text}>{task.description}</p>
          </div>

          <div className={styles.settings}>
            <div className={styles.details}>
              <div className={styles.dates}>
                <div className={styles.dateDeadline}>
                  <p className={styles.deadlineWrap}>
                    <span className={styles.date}>{formattedDate}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Task;
