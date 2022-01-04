import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReduxSyncApp from './ReduxSyncApp';
export default function ReduxRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReduxSyncApp />} />
      </Routes>
    </div>
  );
  // return <div>hi</div>;
}
