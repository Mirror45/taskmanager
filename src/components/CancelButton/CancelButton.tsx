import React from 'react';

import styles from '../../common/DeleteButton.module.css';
import { CancelButtonProps } from '../../types/cancel-button-props';

const CancelButton: React.FC<CancelButtonProps> = ({ onCancel }) => {
  return (
    <button
      className={styles.deleteButton}
      type="button"
      aria-label="Cancel task"
      onClick={onCancel}
    >
      cancel
    </button>
  );
};

export default CancelButton;
