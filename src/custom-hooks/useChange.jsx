import React, { useState, useEffect } from 'react';

export default function useChange() {
  const [value, setValue] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    document.title = `name is ${name} and value is ${value}`;
  }, [name, value]);

  return [value, setValue, name, setName];
}
