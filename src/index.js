import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
//import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

//reportWebVitals();