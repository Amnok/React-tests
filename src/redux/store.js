import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import noteReducer from './reducer/noteReducer';
import postsReducer from './reducer/postsReducer';
const store = createStore(
  combineReducers({noteReducer, postsReducer}),
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );
export default store;