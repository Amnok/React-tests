import React from 'react';
import _ from 'lodash';
import useData from './hooks/useData';
export default function Users({ type }) {
  const [data] = useData('users');
  const style = {
    border: '1px solid black',
    margin: '20px',
    padding: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <div>
      <h2>Users</h2>
      {data.map((item) => (
        <div style={style} key={_.get(item, 'id')}>
          <div>Name is: {item.name} </div>
          <div>Email: {item.email} </div>
          <div>Phone : {item.phone} </div>
        </div>
      ))}
    </div>
  );
}
