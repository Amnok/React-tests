import React from 'react';

function Input(props, someref) {
  console.log({ props, someref });
  return (
    <input
      type="text"
      name="test"
      id=""
      placeholder="i will get focused on init"
      ref={someref}
    />
  );
}

export default React.forwardRef(Input);
