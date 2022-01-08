import createStore from './store';
const initialState = {
  value: 0,
};
function reducer(state = initialState, action) {
  const { type, payload = 1 } = action;
  switch (type) {
    case 'INC':
      return { ...state, value: state.value + payload };
    case 'DEC':
      return { ...state, value: state.value - 1 };
    case 'RES':
      return state;

    default:
      break;
  }
}

export default function CustomRedux() {
  const store = createStore(reducer);
  store.dispatch({ type: 'INC', payload: 5 });
  store.dispatch({ type: 'INC' });
  store.dispatch({ type: 'INC' });
  store.dispatch({ type: 'DEC' });
  console.log(store.getState());
  return <div>CustomRedux</div>;
}
