import _ from 'lodash';
import React, { useState } from 'react';

export default function useSearch(term, data) {
  console.log({ term, data });
  const [searchdata, setSearchdata] = useState([]);
  if (!term) return [data];
  return [data.filter((val) => val.title.includes(term))];
}
