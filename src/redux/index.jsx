import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReduxSyncApp from './ReduxSyncApp';
import ReduxAsyncApp from './ReduxAsyncApp';
export default function ReduxRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReduxSyncApp />} />
        <Route path="/async" element={<ReduxAsyncApp />} />
      </Routes>
    </div>
  );
  // return <div>hi</div>;
}
