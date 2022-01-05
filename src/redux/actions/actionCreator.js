import axios from 'axios';
import _ from 'lodash';
import * as Actions from './actions';

export const addNote = (note) => {
    return {
        type: Actions.ADD_NOTE,
        payload: note,
    }
}
export const removeNote = (note) => {
    return {
        type: Actions.REMOVE_NOTE,
        payload: note,
    }
}
export const getNotes = () => {
    return {
        type: Actions.GET_NOTES,
        payload: _.noop(),
    }
}

// export const addPost = (post) => {
//     return async (dispatch) => {

//     }
// }

export const getPosts = () => {
    return async (dispatch) => {
        dispatch({type: Actions.LOADING, payload: []})
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({ type: Actions.GET_POSTS, payload: data})
     }
}