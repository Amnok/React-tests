// import createStore from './custom-store';
import store from './store/index';
import { addBug, bugResolved, getBugs } from './store/bugs';
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

// export default function CustomRedux() {
//   const store = createStore(reducer);
//   store.dispatch({ type: 'INC', payload: 5 });
//   store.dispatch({ type: 'INC' });
//   store.dispatch({ type: 'INC' });
//   store.dispatch({ type: 'DEC' });
//   console.log(store.getState());
//   return <div>CustomRedux</div>;
// }

export default function CustomRedux() {

  store.dispatch(addBug({description: 'Bug 1' }));
  store.dispatch(addBug({description: 'Bug 2' }));
  store.dispatch(addBug({description: 'Bug 3' }));
  console.log(store.getState());
  return <div>Hello</div>;
}
