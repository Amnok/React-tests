import React, { useReducer } from 'react';

export default function UseReducerTest() {
  const initialState = {
    count: 0,
  };
  const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'INC':
        return {
          count: state.count + 1,
        };
      case 'DEC':
        return {
          count: state.count - 1,
        };
      case 'RES':
        return {
          count: 0,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <span>Count is {state.count}</span>
      <button onClick={() => dispatch({ type: 'INC' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RES' })}>Reset</button>
    </div>
  );
}
