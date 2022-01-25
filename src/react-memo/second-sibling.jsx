import React from 'react';

function SecondSibling({ val }) {
  console.log('inside SecondSibling');
  return <div>This is second sibling and the value is :- {val.val}</div>;
}

export default React.memo(SecondSibling);
