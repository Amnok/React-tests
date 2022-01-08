import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import notesReducer from './store/notes';
import postsReducer from './store/posts';
const store = createStore(
  combineReducers({notesReducer, postsReducer}),
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );
export default store;