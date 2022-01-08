import axios from 'axios';

// actions
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const GET_POSTS = 'GET_POSTS';
export const LOADING = 'LOADING';

// action creators
export const getPosts = () => {
    return async (dispatch) => {
        dispatch({type: LOADING, payload: []})
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({ type: GET_POSTS, payload: data})
     }
}

// reducer

const initialState = {
    posts: [],
    error: {},
    isLoading: false,
  };
  
  export default function postsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_POSTS:
        return { ...state, posts: payload, isLoading: false };
      case LOADING:
        return { ...state, notes: [], isLoading: true };
      // case Actions.REMOVE_NOTE:
      //   const filtered = state.notes.filter(
      //     (note) => note.id !== _.get(payload, 'id')
      //   );
      //   return { ...state, notes: filtered };
      default:
        return state;
    }
  }
  