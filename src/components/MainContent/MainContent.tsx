import React from 'react';
import TaskControl from '../TaskControl/TaskControl';
import MainFilter from '../MainFilter/MainFilter';
import TaskBoard from '../TaskBoard/TaskBoard';

const MainContent: React.FC = () => {
  return (
    <>
      <TaskControl />
      <MainFilter />
      <TaskBoard />
    </>
  );
};

export default MainContent;
