import React from 'react';

export const SecondChild = React.memo(({ onClick, secondCounter }) => {
  console.log('SecondChild is called');
  return <button onClick={onClick}>Counter is : {secondCounter}</button>;
});
