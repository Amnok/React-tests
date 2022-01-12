function createStore(reducer) {
  let state;
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((list) => list(state));
  }
  function subscribe(listener) {
    listeners.push();
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore;
