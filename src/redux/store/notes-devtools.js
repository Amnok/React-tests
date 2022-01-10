import _ from 'lodash';
import { createAction } from '@reduxjs/toolkit';

// actions
export const addNote = createAction('addNote');
export const removeNote = createAction('removeNote');
export const getNotes = createAction('getNotes');

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
            case addNote.type:
                return {...state,notes: [...state.notes, payload] };
            case removeNote.type:
                const filtered = state.notes.filter((note) => note.id !== _.get(payload, 'id'));
                return {...state, notes: filtered};
            default:
                return state;
        }
}