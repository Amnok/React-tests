import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './index';
import CustomErrorBoundary from './custom';

export default function ErrorBoundaryRouter() {
  return (
    <Routes>
      <Route
        path="/error-boundary-custom"
        element={<CustomErrorBoundary />}
      ></Route>
      {/* <Route path="/error-boundary-lib" element={}></Route> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
