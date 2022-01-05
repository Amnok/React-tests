import _ from 'lodash';
import * as Actions from '../actions/actions';

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

export default function noteReducer(state = initialState, action) {
    const { type, payload } = action;
        switch (type) {
            case Actions.ADD_NOTE:
                return {...state,notes: [...state.notes, payload] };
            case Actions.REMOVE_NOTE:
                const filtered = state.notes.filter((note) => note.id !== _.get(payload, 'id'));
                return {...state, notes: filtered};
            default:
                return state;
        }
}