import React, { useState } from 'react';
import FirstSibling from './first-sibling';
import SecondSibling from './second-sibling';

export default function Memo() {
    const [val, setVal] = useState({val: 1});
  return (
    <div>
      <button onClick={() => setVal({val: 1})}>Click me to send the state </button>
      <FirstSibling val={val}/>
      <SecondSibling val={val}/>
    </div>
  );
}
