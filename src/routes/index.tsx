import React from 'react';
import {BrowserRouter, Route, Routes as MainRoutes} from 'react-router-dom';
import Customers from '../pages/Customers';

function Routes() {
  return (
    <BrowserRouter>
      <MainRoutes>
        <Route path="/" element={<Customers />} />
      </MainRoutes>
    </BrowserRouter>
  );
}

export default Routes;
