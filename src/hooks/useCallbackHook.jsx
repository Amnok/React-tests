import React, { useCallback, useState } from 'react';
import { FirstChild } from './FirstChild';
import { SecondChild } from './SecondChild';

function UseCallbackHook() {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  // // withcallback
  // const firstonClick = useCallback(() => {
  //      setFirstCounter(firstCounter +1)
  // }, [firstCounter])

  // const secondonClick = useCallback(() => {
  //      setSecondCounter(secondCounter +1)
  // }, [secondCounter])

  // // without callback
  const firstonClick = () => {
    setFirstCounter(firstCounter + 1);
  };
  const secondonClick = () => {
    setSecondCounter(secondCounter + 1);
  };
  return (
    <div>
      <FirstChild onClick={firstonClick} firstCounter={firstCounter} />
      <SecondChild onClick={secondonClick} secondCounter={secondCounter} />
    </div>
  );
}

export default UseCallbackHook;
