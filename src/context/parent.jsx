import React from 'react';
import UserContext from './userContext';

export default function parent(props) {
  let theme = 'black';
  return (
    <UserContext.Provider value={theme}>{props.children}</UserContext.Provider>
  );
}
