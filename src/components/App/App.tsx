import React from 'react';
import TaskBoard from '../TaskBoard/TaskBoard';

const App: React.FC = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskBoard />
    </div>
  );
};

export default App;
