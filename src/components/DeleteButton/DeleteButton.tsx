import React from 'react';

interface DeleteButtonProps {
  onDelete: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <button className="card__delete" type="button" aria-label="Delete task" onClick={onDelete}>
      delete
    </button>
  );
};

export default DeleteButton;
