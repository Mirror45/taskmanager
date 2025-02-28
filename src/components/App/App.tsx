import React from 'react';
import TaskBoard from '../TaskBoard/TaskBoard';
import MainFilter from '../MainFilter/MainFilter';
import TaskControl from '../TaskControl/TaskControl';

const App: React.FC = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskControl />
      <MainFilter />
      <TaskBoard />
    </div>
  );
};

export default App;
