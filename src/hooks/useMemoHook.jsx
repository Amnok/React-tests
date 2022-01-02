import React, { useMemo, useState } from 'react';

function UseMemoHook() {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const firstOne = () => {
    setFirstCounter(firstCounter + 1);
  };
  const secondOne = () => {
    setSecondCounter(secondCounter + 1);
  };
  const isEven = () => {
    console.log('calculating even...');
    // let i = 0;
    // while (i < 2000000000) i++;
    return firstCounter % 2 === 0 ? 'Even' : 'Odd';
  };
  const isEvenMemo = useMemo(() => isEven(), [firstCounter]);
  return (
    <div style={{ margin: '0 auto' }}>
      <button onClick={firstOne} style={{ margin: '20px' }}>
        First Counter - {firstCounter} {isEvenMemo}
      </button>
      <button onClick={secondOne}>Second Counter - {secondCounter}</button>
    </div>
  );
}

export default UseMemoHook;
