import React, { useEffect, useRef } from 'react';
import Input from './Input';

function useRefHook() {
  let Iref = useRef(null);

  useEffect(() => {
    Iref.current.focus();
  }, []);

  return (
    <div>
      <Input ref={Iref} a={2} />
    </div>
  );
}

export default useRefHook;
