import React from 'react';
import styles from '../../common/DeleteButton.module.css';
import { DeleteButtonProps } from '../../types/delete-button-props';

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <button
      className={styles.deleteButton}
      type="button"
      aria-label="Delete task"
      onClick={onDelete}
    >
      delete
    </button>
  );
};

export default DeleteButton;
