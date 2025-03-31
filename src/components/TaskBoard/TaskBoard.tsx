import React from 'react';
import TaskList from '../TaskList/TaskList';
import TaskSort from '../TaskSort/TaskSort';
import Statistics from '../Statistics/Statistics';

const TaskBoard: React.FC = () => {
  return (
    <div>
      <TaskSort />
      <TaskList />
      <Statistics />
    </div>
  );
};

export default TaskBoard;
