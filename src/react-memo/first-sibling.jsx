import React from 'react';

function FirstSibling({ val }) {
  console.log('inside FirstSibling');
  return <div>This is first sibling and the value is :- {val.val}</div>;
}

export default React.memo(FirstSibling);
