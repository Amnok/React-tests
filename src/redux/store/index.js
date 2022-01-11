// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { fromPairs } from 'lodash';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import notesReducer from './notes-devtools';
import moviesReducer from './movies';

// const store = createStore(
//   combineReducers({notesReducer, moviesReducer}),
//     composeWithDevTools(
//       applyMiddleware(thunk)
//       // other store enhancers if any
//     )
//   );
// export default store;

const reducer = {
  notesReducer, moviesReducer
}
export default configureStore({reducer});