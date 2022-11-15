import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '/node_modules/dark-light-mode/src/dark-light-mode.mjs';

import DarkModeContext from './component/context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeContext>
    <App />
  </DarkModeContext>
);