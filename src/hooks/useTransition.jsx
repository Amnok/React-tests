import React from 'react';
import { useState, useTransition } from 'react';

export default function useTransitionHook() {
  const [value, setValue] = useState();
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const items = [];

  const handleChange = (e) => {
    setValue(e.target.value);
    for (let i = 0; i < 50000; i++) {
      items.push(e.target.value + i);
    }
    startTransition(() => {
      setList(items);
    });
  };
  return (
    <React.Fragment>
      <input onChange={handleChange}></input>
      {isPending && <div>OOps !! still loading</div>}
      {list.map((v, index) => (
        <div key={`${v}+${index}`}>{v}</div>
      ))}
    </React.Fragment>
  );
}
