import React from 'react';

export const FirstChild = React.memo(({ onClick, firstCounter }) => {
  console.log('FirstChild is called');
  return <button onClick={onClick}>Counter is : {firstCounter}</button>;
});
