import React from 'react';

export default function Item({ item, onItemClick }) {
  const style = {
    border: '1px solid black',
    margin: '20px',
    padding: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <div style={style} onClick={onItemClick}>
      <div>Name is: {item.name} </div>
      <div>Email: {item.email} </div>
      <div>Phone : {item.phone} </div>
    </div>
  );
}
