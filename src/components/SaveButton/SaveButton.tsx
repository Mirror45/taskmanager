import React from 'react';

interface SaveButtonProps {
  onSave: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onSave }) => {
  return (
    <button className="card__save" type="submit" aria-label="Save task" onClick={onSave}>
      save
    </button>
  );
};

export default SaveButton;
