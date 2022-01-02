import React from 'react';
import { getModules } from './assets/data';
import { Link } from 'react-router-dom';

function Home() {
  const style = {
    marginTop: '20px',
  };
  return (
    <div style={style}>
      <ul>
        {getModules().map((val) => (
          <li key={val.id}>
            <Link to={val.url}>{val.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
