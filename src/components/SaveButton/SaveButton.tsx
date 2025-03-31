import React from 'react';

import { SaveButtonProps } from '../../types/save-button-props';

import styles from './SaveButton.module.css';

const SaveButton: React.FC<SaveButtonProps> = ({ disabled }) => {
  return (
    <button className={styles.saveButton} type="submit" aria-label="Save task" disabled={disabled}>
      save
    </button>
  );
};

export default SaveButton;
