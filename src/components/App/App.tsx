import React from 'react';
import TaskBoard from '../TaskBoard/TaskBoard';
import MainFilter from '../MainFilter/MainFilter';

const App: React.FC = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <MainFilter />
      <TaskBoard />
    </div>
  );
};

export default App;
