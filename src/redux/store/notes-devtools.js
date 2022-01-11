import _ from 'lodash';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';


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

// // actions
// export const addNote = createAction('addNote');
// export const removeNote = createAction('removeNote');
// export const getNotes = createAction('getNotes');

// // reducer
// const notesreducer = createReducer(initialState, {
//     [addNote.type]: (state, action)=> {
//         state.notes.push(action.payload); 
//     },
//     [removeNote.type]: (state, action) => {
//         state.notes = state.notes.filter((note) => note.id !== _.get(action, 'payload.id'));
//     },
// })

const {reducer, actions} = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action)=> {
            state.notes.push(action.payload); 
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== _.get(action, 'payload.id'));
        },
        getNotes: (state, action) => {
            // return state;
        }
    }

})
export const {addNote, removeNote, getNotes} = actions;
export default reducer;