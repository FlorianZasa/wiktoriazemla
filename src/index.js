import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

import '@fontsource/istok-web';
import '@fontsource/istok-web/400.css';
import '@fontsource/istok-web/400-italic.css'; 
import '@fontsource/istok-web/700.css';
import '@fontsource/istok-web/700-italic.css'; 
import applyColors from './utils/applyColors';

import PiwikPro from '@piwikpro/react-piwik-pro';

PiwikPro.initialize('1f3fcf65-8739-405f-b7bc-eceda500dfed', 'https://wiktoriazemla.piwik.pro');

applyColors();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
