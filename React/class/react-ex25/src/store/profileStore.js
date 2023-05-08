import {createSlice} from '@reduxjs/toolkit';

let profile = createSlice({
    name: 'profile',
    initialState: { name : "ost", age: 24 },
    reducers : {
        setName : (state, action) => {
            state.name = action.payload;
        },
        setAge : (state, action) => {
            state.age = Number.parseInt(action.payload);
        }
    }
});

export const {setName, setAge} = profile.actions;
export default profile.reducer;