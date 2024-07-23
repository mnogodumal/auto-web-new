import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import LandingPage from './Pages/LandingPage/LandingPage';
import NotFound from './Pages/NotFound';
import { ModalProvider } from './Components/PopUp/PopUpLandingContext';
import SellerRegistrationPage from './Pages/SellerPage/SellerRegistrationPage';
import SellerLogInPage from './Pages/SellerPage/SellerLogInPage';
import SellerPage from './Pages/SellerPage/SellerPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/regsel' element={<SellerRegistrationPage />} />
          <Route path='/loginsel' element={<SellerLogInPage />} />
          <Route path='/seller' element={<SellerPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();