import axios from 'axios';
import _ from 'lodash';
// actions
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const GET_POSTS = 'GET_POSTS';
export const LOADING = 'LOADING';

// action creators

async function fetchPosts() {
  return new Promise(async (resolve, reject) => {
    const {data} = await axios.get('http://localhost:3006/posts');
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })
}
export const getPosts = () => {
    return async (dispatch) => {
        dispatch({type: LOADING, payload: []})
        const data = await fetchPosts();
        console.log("data", data);
        dispatch({ type: GET_POSTS, payload: data})
     }
}

export const addPost = (title) => {
  return async(dispatch, getState) => {
    const state = getState();
    const posts = _.get(state, 'postsReducer.posts');
    console.log("state in addpost", getState());
    dispatch({type: LOADING, payload: []});
    const post = {
      id: (posts.length +1).toString() ,
      title,
    }
    const {data} = await axios.post('http://localhost:3006/posts', post);
    console.log("data in addpost", data);
    dispatch({type: ADD_POST, payload: data});
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
    console.log("state in postsreducer", state);
    switch (type) {
      case ADD_POST:
        return {...state, posts: [...state.posts, payload], isLoading: false}
      case GET_POSTS:
        return { ...state, posts: payload, isLoading: false };
      case LOADING:
        return { ...state, posts: [], isLoading: true };
      // case Actions.REMOVE_NOTE:
      //   const filtered = state.notes.filter(
      //     (note) => note.id !== _.get(payload, 'id')
      //   );
      //   return { ...state, notes: filtered };
      default:
        return state;
    }
  }
  