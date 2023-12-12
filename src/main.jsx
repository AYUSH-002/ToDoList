import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import { TodoProvider } from './contexts/TodoContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);

