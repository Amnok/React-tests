import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  const [isVisible, setisVisible] = useState(false);
  const [data, setData] = useState({ name: 'test', state: 'Delhi', id: '10' });

  useEffect(() => {
    console.log('this gets called only once');
  }, []);

  useEffect(() => {
    console.log('this is called on dependency change');
  }, [isVisible]);

  useEffect(() => {
    console.log('this is called on dependency change with cleanup');
    return () => {
      console.log('cleanup here');
      // listeners, timeouts
    };
  }, [isVisible]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ textAlign: 'center' }}>useEffectHook</h2>
      <div style={{ margin: '0 auto' }}>
        {isVisible && <div>I am visible Now !!!</div>}
        <button
          onClick={() => setisVisible((prevState) => !prevState)}
          style={{ marginRight: '20px' }}
        >
          Click to toggle (normal)
        </button>
        <button onClick={() => setisVisible(!isVisible)}>
          Click to toggle (callback)
        </button>
      </div>
    </div>
  );
}

export default UseEffectHook;
