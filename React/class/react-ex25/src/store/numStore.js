import {createSlice} from '@reduxjs/toolkit';

export let num = createSlice({
    name: 'num',
    initialState: 0,
        reducers: {
            increment: (state) => state + 1,
            decrement: (state) => state - 1
        }
});

export const {increment, decrement} = num.actions;
export default num.reducer;