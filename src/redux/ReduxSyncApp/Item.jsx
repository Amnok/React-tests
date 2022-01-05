import React from 'react';
import _ from 'lodash';

function Item({ note, handleRemove }) {
  const style = {
    border: '1px solid grey',
    backgroundColor: '#efe3e3',
    padding: '20px',
    margin: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  return (
    <div style={style}>
      {_.get(note, 'text')}{' '}
      <button onClick={() => handleRemove(note)}>Remove</button>
    </div>
  );
}

export default Item;
