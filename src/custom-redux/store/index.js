import {configureStore} from '@reduxjs/toolkit';
import bugsReducer from './bugs';

const reducer = {
bugsReducer
}

const store = configureStore({reducer});
export default store;