import React, { useState } from 'react';

function Input({ onAdd }) {
  const conatinerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginTop: '20px',
  };
  const [text, setText] = useState('');
  const handleOnClick = () => {
    onAdd(text);
  };
  return (
    <div style={conatinerStyle}>
      <input
        type="text"
        name="item"
        id=""
        placeholder="Enter note here"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
}

export default Input;
