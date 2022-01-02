import React from 'react'
import { Link } from 'react-router-dom';
import { getHooks } from '../assets/data'

 function Hooks() {
    const style = {
      marginTop: '20px',
    };
    return (
      <div style={style}>
        <ul>
          {getHooks().map((val) => (
            <li key={val.id}>
              <Link to={val.url}>{val.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default Hooks;