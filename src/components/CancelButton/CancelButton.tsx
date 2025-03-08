import React from 'react';

interface CancelButtonProps {
  onCancel: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onCancel }) => {
  return (
    <button className="card__delete" type="button" aria-label="Cancel task" onClick={onCancel}>
      cancel
    </button>
  );
};

export default CancelButton;
