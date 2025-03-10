import React from 'react';
import TaskList from '../TaskList/TaskList';
import TaskSort from '../TaskSort/TaskSort';
import AddNewTask from '../AddNewTask/AddNewTask';

const TaskBoard: React.FC = () => {
  return (
    <div>
      <TaskSort />
      <TaskList />
      <AddNewTask />
    </div>
  );
};

export default TaskBoard;
