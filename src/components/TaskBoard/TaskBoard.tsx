import React from 'react';
import TaskList from '../TaskList/TaskList';
import TaskSort from '../TaskSort/TaskSort';

const TaskBoard: React.FC = () => {
  return (
    <div>
      <TaskSort />
      <TaskList />
    </div>
  );
};

export default TaskBoard;
