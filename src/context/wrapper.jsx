import React from 'react';
import Child from './child';
import Parent from './parent';

export default function wrapper() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}
