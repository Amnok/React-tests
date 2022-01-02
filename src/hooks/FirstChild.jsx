import React from 'react';

export const FirstChild = React.memo(({ onClick }) => {
  console.log('i am called');
  return <div>This is First Child</div>;
});
