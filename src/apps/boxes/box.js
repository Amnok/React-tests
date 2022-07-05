import React from 'react';

function Box({ clickHandler,v }) {
    console.log(v);
const {name, active} = v;
    function clicker() {
        clickHandler(name)
    }

  return (
    <div>
      <p
        style={{
          width: '100px',
          height: '100px',
          border: '1px soild red',
          textAlign: 'center',
          cursor: 'pointer',
          background: active ? 'red' : 'cyan',
        }}
        onClick={clicker}
      >
        {name}
      </p>
    </div>
  );
}

export default React.memo(Box);
