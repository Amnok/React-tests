import React from 'react';
import { Link } from 'react-router-dom';
import { getForms } from '../assets/data';
export default function Redux() {
  const style = {
    marginTop: '20px',
  };
  return (
    <div style={style}>
      <ul>
        {getForms().map((val) => (
          <li key={val.id}>
            <Link to={val.url}>{val.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
