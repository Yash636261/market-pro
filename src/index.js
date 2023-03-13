import React from 'react';
import {App,AppImage} from './App';
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppImage />
  </React.StrictMode>
);

