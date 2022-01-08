import React from 'react';
import { Link } from 'react-router-dom';
import { getRedux } from '../assets/data';
export default function Redux() {
  const style = {
    marginTop: '20px',
  };
  return (
    <div style={style}>
      <ul>
        {getRedux().map((val) => (
          <li key={val.id}>
            <Link to={val.url}>{val.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
