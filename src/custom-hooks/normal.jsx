import React from 'react';
import useChange from './useChange';

export default function Normal() {
  const [value, setValue, name, setName] = useChange();
  return (
    <div>
      <button onClick={() => setValue(value + 1)}>value is {value}</button>
      <span>name is {name}</span>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
