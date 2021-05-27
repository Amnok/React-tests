import React, { useEffect, useState } from 'react';

export default function FuntionalTick() {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    console.log('iside effetc');
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, [time]);
  return (
    <React.Fragment>
      <div>{time}</div>
      <h1>Hello</h1>
    </React.Fragment>
  );
}
