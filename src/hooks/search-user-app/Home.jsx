import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '100px',
    marginTop: '20px',
  };
  function onSetType(temp) {
    navigate(`${temp}`);
  }

  return (
    <div>
      <div style={style}>
        <button onClick={() => onSetType('users')}>Get Users</button>
        <button onClick={() => onSetType('posts')}>Get Posts</button>
        <button onClick={() => onSetType('comments')}>Get Comments</button>
      </div>
    </div>
  );
}
