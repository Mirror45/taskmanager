import React from 'react';
import MainContent from '../MainContent/MainContent';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <main className={`${styles.main} ${styles.container}`}>
      <MainContent />
    </main>
  );
};

export default App;
