import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReduxSyncApp from './ReduxSyncApp';
import ReduxAsyncApp from './ReduxAsyncApp';
import Redux from './index';
export default function ReduxRouter() {
  return (
    <div>
      <Routes>
        <Route path="/redux-sync" element={<ReduxSyncApp />} />
        <Route path="/redux-async" element={<ReduxAsyncApp />} />
        <Route path="/" element={<Redux />} />
      </Routes>
    </div>
  );
  // return <div>hi</div>;
}
