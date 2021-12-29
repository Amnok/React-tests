import React, { useContext } from 'react';
import userContext from '../context/userContext';

function UseContextHook() {
  const context = useContext(userContext);
  const { theme, setTheme } = context;
  console.log(context);
  const useTheme = (param) => {
    if (param) {
      return { backgroundColor: 'black', color: 'white' };
    }
    return { backgroundColor: 'white', color: 'black' };
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh !important',
        ...useTheme(theme),
      }}
    >
      <h2 style={{ textAlign: 'center' }}>useContextHook</h2>
      <div style={{ margin: '0 auto' }}>
        <button onClick={() => setTheme(!theme)}>Click to change theme</button>
      </div>
    </div>
  );
}

export default UseContextHook;
