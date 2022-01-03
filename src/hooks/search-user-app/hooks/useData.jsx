import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function useData(type) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/${type}`
      );
      setData(data);
      console.log(data);
    }
    getData();
  }, [type]);

  return [data];
}
