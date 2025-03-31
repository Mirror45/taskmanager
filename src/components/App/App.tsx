import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import MainFilter from '../MainFilter/MainFilter';
import Statistics from '../Statistics/Statistics';
import TaskBoard from '../TaskBoard/TaskBoard';
import TaskControl from '../TaskControl/TaskControl';

import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <main className={`${styles.main} ${styles.container}`}>
      <TaskControl />
      <MainFilter />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TaskBoard />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </main>
  );
};

export default App;
