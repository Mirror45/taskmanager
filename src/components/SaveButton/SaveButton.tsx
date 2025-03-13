import React from 'react';
import styles from './SaveButton.module.css';
import { SaveButtonProps } from '../../types/save-button-props';

const SaveButton: React.FC<SaveButtonProps> = ({ onSave }) => {
  return (
    <button className={styles.saveButton} type="submit" aria-label="Save task" onClick={onSave}>
      save
    </button>
  );
};

export default SaveButton;
