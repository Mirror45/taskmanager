import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Please check the HTML structure.');
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
