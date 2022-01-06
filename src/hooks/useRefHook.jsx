import React, { useEffect, useRef } from 'react';

function useRefHook() {
  let Iref = useRef(null);
  useEffect(() => {
    Iref.current.focus();
  }, []);
  return (
    <div>
      <input
        type="text"
        name="test"
        id=""
        placeholder="i will get focused on init"
        ref={Iref}
      />
    </div>
  );
}

export default useRefHook;
