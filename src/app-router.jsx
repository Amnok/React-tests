import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Memo from './react-memo';

const HooksRouter = React.lazy(() => import('./hooks/hooks-router'));
const ReduxRouter = React.lazy(() => import('./redux/redux-router'));
const ErrorBoundary = React.lazy(() =>
  import('./error-boundary/error-boundary-Router')
);
const Forms = React.lazy(() => import('./forms/forms-router'));

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/hooks/*" element={<HooksRouter />} />
        <Route path="/redux/*" element={<ReduxRouter />} />
        <Route path="/error-boundary/*" element={<ErrorBoundary />} />
        <Route path="/forms/*" element={<Forms />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
