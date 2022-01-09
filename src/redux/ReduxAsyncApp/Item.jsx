import React from 'react';
import _ from 'lodash';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

function Item({ post, handleRemove }) {
  const style = {
    border: '1px solid grey',
    backgroundColor: '#c895e7',
    padding: '20px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#fff',
  };
  return (
    <div style={style}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <header style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ fontWeight: 'bold' }}>{_.get(post, 'name')}</div>
          <ReactStars
            count={5}
            size={24}
            value={Number(_.get(post, 'rating'))}
            activeColor="#ffd700"
          />
        </header>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '10px', cursor: 'pointer' }}>
            <FaEdit size={20} />
          </div>
          <div onClick={() => handleRemove(post)} style={{ cursor: 'pointer' }}>
            <FaWindowClose />
          </div>
        </div>
      </div>
      <div>{_.get(post, 'detail')}</div>
    </div>
  );
}

export default Item;
