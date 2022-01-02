import React from 'react';
import _ from 'lodash';
import useData from './hooks/useData';
export default function Comments({ type }) {
  const [data] = useData('comments');
  const style = {
    border: '1px solid black',
    margin: '20px',
    padding: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <div>
      <h2>Comments</h2>
      {data.map((item) => (
        <div style={style} key={_.get(item, 'id')}>
          <div>Name is: {item.name} </div>
          <div>Email is: {item.email} </div>
          <div>Body is : {item.body} </div>
        </div>
      ))}
    </div>
  );
}
