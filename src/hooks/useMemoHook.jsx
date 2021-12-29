import React, { useMemo, useState } from 'react';

function UseMemoHook() {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const firstMeth = () => {
    // console.log('first one');
    setFirstCounter(firstCounter + 1);
    return `hi ${firstCounter}`;
  };
  const secondMeth = useMemo(() => {
    console.log('second one');
    return `hi ${secondCounter}`;
  }, [secondCounter]);
  const temp = () => {
    console.log('last one');
    return `hi ${secondCounter}`;
  };
  return (
    <div>
      {/* {firstMeth()} */}
      {secondMeth}
      {temp()}
      <button onClick={firstMeth}>click to change</button>
      {/* <button onClick={secondMeth}>second</button> */}
    </div>
  );
}

export default UseMemoHook;
