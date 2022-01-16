import React from 'react';
import ErrorBoundary from './errorBoundary';
import First from './first';

export default function WrappingComponent() {
  return (
    <div>
      <ErrorBoundary>
        <h1>wrapping component</h1>
        <First name="superman" />
      </ErrorBoundary>
    </div>
  );
}
