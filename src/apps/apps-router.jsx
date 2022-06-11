import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Pokemon from './pokemon';
import Apps from './index';

export default function AppsRouter() {
  return (
    <div>
      <Routes>
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/" element={<Apps />} /> */
      </Routes>
    </div>
  );
}
