import React, { useState } from 'react';
import Box from './box';

const initState = [...Array(10).keys()].map((v) => ({
    name: `Tile ${v}`,
    active: false,
  }));
export default function Boxes() {
  const [data, setData] = useState({tiles: initState});
  console.log({data});

  const clickHandler = (name) => {
    console.log({name, data});
    setData((state) => {
        const tempData = [...state.tiles];
        console.log(tempData === state);
        const elementIndex = tempData.findIndex((v) => v.name === name);
        const newElem = {...tempData[elementIndex]};
        newElem.active = !newElem.active;
        tempData[elementIndex] = newElem;
        console.log({tempData, state});
        return {
            ...state, tiles: tempData
        };
    });
  };
  const _clickHandler = React.useCallback(clickHandler, []);
    return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {data.tiles.map((elem) => (
        <Box
          clickHandler={_clickHandler}
          v={elem}
          key={`${elem.name}`}
        ></Box>
      ))}
    </div>
  );
}
