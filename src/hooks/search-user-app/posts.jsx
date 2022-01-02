import React from 'react';
import _ from 'lodash';
import useData from './hooks/useData';
export default function Posts({ type }) {
  const [data] = useData('posts');
  const style = {
    border: '1px solid black',
    margin: '20px',
    padding: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <div>
      <h2>Posts</h2>
      {data.map((item) => (
        <div style={style} key={_.get(item, 'id')}>
          <div>Title is: {item.title} </div>
          <div>Body {item.body} </div>
        </div>
      ))}
    </div>
  );
}
