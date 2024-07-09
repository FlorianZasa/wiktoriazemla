import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/istok-web';
import '@fontsource/istok-web/400.css';
import '@fontsource/istok-web/400-italic.css'; 
import '@fontsource/istok-web/700.css';
import '@fontsource/istok-web/700-italic.css'; 
import applyColors from './utils/applyColors';

applyColors();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();