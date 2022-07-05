import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Pokemon from './pokemon';
import Boxes from './boxes/boxes';
import Apps from './index';

export default function AppsRouter() {
  return (
    <div>
      <Routes>
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/boxes" element={<Boxes />} />
        <Route path="/" element={<Apps />} /> */
      </Routes>
    </div>
  );
}
