import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import notesReducer from './notes';
import postsReducer from './posts';
const store = createStore(
  combineReducers({notesReducer, postsReducer}),
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );
export default store;