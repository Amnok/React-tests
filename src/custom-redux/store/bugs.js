import {createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';

let lastId = 0;
const initialState = {
    bugs: [],
    isLoading: false,
    error: null,
}
const {actions, reducer} = createSlice({
    name: 'bugs',
    initialState,
    reducers: ({
        addBug: (state, action) => {
            state.bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (state , action ) => {
            const bugId = state.bugs.findIndex(bug => bug.id === action.payload.id);
            state.bugs[bugId].resolved = true;
        },
        getBugs: (state, action) => {

        }
    })
})

export const {addBug, bugResolved, getBugs} = actions;
export default reducer;