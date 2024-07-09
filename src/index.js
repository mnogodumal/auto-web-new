import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Switch } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import LandingPage from './Pages/LandingPage/LandingPage';
import RegistrationPageSelle from './Pages/RegistrationPage/RegistrationPageSeller';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>

      </Switch>
      <LandingPage />
      <RegistrationPageSelle />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
