import React from 'react';
import styles from './SaveButton.module.css';
import { SaveButtonProps } from '../../types/save-button-props';

const SaveButton: React.FC<SaveButtonProps> = ({ disabled }) => {
  return (
    <button className={styles.saveButton} type="submit" aria-label="Save task" disabled={disabled}>
      save
    </button>
  );
};

export default SaveButton;
