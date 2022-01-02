import React from 'react';
import Item from './Item';
function Items({ items, onItemClick }) {
  console.log('items', items);
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} onItemClick={onItemClick} />
      ))}
    </div>
  );
}

export default Items;
