import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import notesReducer from './notes';
import moviesReducer from './movies';
const store = createStore(
  combineReducers({notesReducer, moviesReducer}),
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );
export default store;