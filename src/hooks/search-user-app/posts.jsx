import React, { useState } from 'react';
import _ from 'lodash';
import useData from './hooks/useData';
import useSearch from './hooks/useSearch';
export default function Posts() {
  const [term, setTerm] = useState('');
  const [initData] = useData('posts');
  console.log({ initData });
  const [data] = useSearch(term, initData);
  const style = {
    border: '1px solid black',
    margin: '20px',
    padding: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  function handleChange(e) {
    console.log(e);
    setTerm(_.get(e, 'target.value'));
  }
  // debounce for input
  const handleDebounce = _.debounce(handleChange, 500);

  return (
    <div>
      <h2>Posts</h2>
      <input type="text" onChange={handleDebounce} placeholder="Search Here" />
      {data.map((item) => (
        <div style={style} key={_.get(item, 'id')}>
          <div>Title is: {item.title} </div>
          <div>Body {item.body} </div>
        </div>
      ))}
    </div>
  );
}
