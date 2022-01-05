import _ from 'lodash';
import * as Actions from '../actions/actions';

const initialState = {
  posts: [],
  error: {},
  isLoading: false,
};

export default function postsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Actions.GET_POSTS:
      return { ...state, posts: payload, isLoading: false };
    case Actions.LOADING:
      return { ...state, notes: [], isLoading: true };
    case Actions.REMOVE_NOTE:
      const filtered = state.notes.filter(
        (note) => note.id !== _.get(payload, 'id')
      );
      return { ...state, notes: filtered };
    default:
      return state;
  }
}
