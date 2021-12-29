import React, { useState } from 'react';

export default function UseStateHook() {
  const [isVisible, setisVisible] = useState(false);
  const [data, setData] = useState({ name: 'test', state: 'Delhi', id: '10' });
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ textAlign: 'center' }}>useStateHook</h2>
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
      <div style={{ margin: '0 auto' }}>
        <h2>User Details</h2>
        <div>User name: {data.name}</div>
        <div>User state: {data.state}</div>
        <div>User id: {data.id}</div>
        <button
          onClick={() => setData({ name: 'something else', state: 'MUMBAI' })}
        >
          Change user details (complex object)
        </button>
      </div>
    </div>
  );
}
