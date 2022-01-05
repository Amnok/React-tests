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