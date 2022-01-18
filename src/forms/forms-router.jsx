import React from 'react';
import { Route, Routes } from 'react-router-dom';
import YupForm from './yup-form';
import Formik from './formik';
import Forms from './index';

export default function FormsRouter() {
  return (
    <div>
      <Routes>
        <Route path="/yup" element={<YupForm />} />
        <Route path="/formik" element={<Formik />} />
        <Route path="/" element={<Forms />} />
      </Routes>
    </div>
  );
}
