// import createStore from './custom-store';
import store from './store/index';
import { addBug, bugResolved, getBugs, bugAssignedToUser } from './store/bugs';
import { addProject } from './store/projects';
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
  store.dispatch(bugAssignedToUser({id: 1, userId: 2}));
  store.dispatch(bugResolved({id: 2 }));

store.dispatch(addProject({name: 'first projects'}))
  console.log(store.getState());
  return <div>Hello</div>;
}
