import React from 'react';
import { Link } from 'react-router-dom';
import { getErrorBoundary } from '../assets/data';

function Home() {
  const style = {
    marginTop: '20px',
  };
  return (
    <div style={style}>
      <ul>
        {getErrorBoundary().map((val) => (
          <li key={val.id}>
            <Link to={val.url}>{val.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
