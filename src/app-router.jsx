import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const HooksRouter = React.lazy(() => import('./hooks/hooks-router'));
const ReduxRouter = React.lazy(() => import('./redux/redux-router'));
const ErrorBoundary = React.lazy(() =>
  import('./error-boundary/error-boundary-Router')
);

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/hooks/*" element={<HooksRouter />} />
        <Route path="/redux/*" element={<ReduxRouter />} />
        <Route path="/error-boundary/*" element={<ErrorBoundary />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
