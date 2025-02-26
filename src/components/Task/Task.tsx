import React from 'react';
import styles from './Task.module.css';

const Task: React.FC = () => {
  return (
    <article className={styles.card}>
      <div className="card__form">
        <div className={styles.cardInner}>
          <div className={styles.cardControl}>
            <button type="button" className={`${styles.cardBtn} ${styles.cardBtnEdit}`}>
              edit
            </button>
            <button type="button" className={`${styles.cardBtn} ${styles.cardBtnArchive}`}>
              archive
            </button>
            <button type="button" className={styles.cardBtn}>
              favorites
            </button>
          </div>

          <div className={styles.cardColorBar}>
            <svg className="card__color-bar-wave" width="100%" height="10">
              <use xlinkHref="#wave"></use>
            </svg>
          </div>

          <div className={styles.textareaWrap}>
            <p className={styles.text}>Example task which marked as favorite.</p>
          </div>

          <div className={styles.settings}>
            <div className={styles.details}>
              <div className={styles.dates}>
                <div className={styles.dateDeadline}>
                  <p className={styles.deadlineWrap}>
                    <span className={styles.date}>23 September</span>
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
