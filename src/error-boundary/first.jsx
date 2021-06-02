import React from 'react';

export default function First({ name }) {
  if (name === 'superman') throw new Error('superman error');
  return <div>This is a first component</div>;
}
