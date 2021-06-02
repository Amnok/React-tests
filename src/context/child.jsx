import React, { useContext } from 'react';
import userContext from './userContext';

export default function Child(props) {
  const theme = useContext(userContext);
  console.log('theme');
  return <div>theme is {theme}</div>;
}
