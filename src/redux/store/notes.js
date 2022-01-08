import _ from 'lodash';

// actions
export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const GET_NOTES = 'GET_NOTES';

// actionCreators
export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note,
    }
}
export const removeNote = (note) => {
    return {
        type: REMOVE_NOTE,
        payload: note,
    }
}
export const getNotes = () => {
    return {
        type: GET_NOTES,
        payload: _.noop(),
    }
}

// reducer

const initialState = {
    notes: [
            { id: 1, text: 'This is first Note' },
            { id: 2, text: 'This is second Note' },
            { id: 3, text: 'This is third Note' },
            { id: 4, text: 'This is fourth Note' },
          ],
    error:{},
    isLoading: false,
}

export default function notesReducer(state = initialState, action) {
    const { type, payload } = action;
        switch (type) {
            case ADD_NOTE:
                return {...state,notes: [...state.notes, payload] };
            case REMOVE_NOTE:
                const filtered = state.notes.filter((note) => note.id !== _.get(payload, 'id'));
                return {...state, notes: filtered};
            default:
                return state;
        }
}