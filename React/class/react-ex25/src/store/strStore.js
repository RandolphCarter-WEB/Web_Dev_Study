import {createSlice} from '@reduxjs/toolkit';

export let str = createSlice({
    name: 'str',
    initialState: "ost",
    reducers: {
            changeStr (state, action) {
                return action.payload;
            }
        }
});

export const {changeStr} = str.actions;
export default str.reducer;