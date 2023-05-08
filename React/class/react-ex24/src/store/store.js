import {configureStore, createSlice} from '@reduxjs/toolkit';

let numStore = createSlice({
    name : 'numStore',
    initialState : 3,
    reducers : {
            increaseNum : (state) => {
                return state + 1;
            },
            decreaseNum : (state) => {
                return state - 1;
            },
            increaseNumber : (state, action) => {
                return state + action.payload;
            }
        }
});

//file 나누기
let strStore = createSlice({
    name : 'strStore',
    initialState : 'hello',
    reducers : {
                changeName : () => {
                    return "%OH";
                },
                plusName : (state, action) => {
                    return state + action.payload;
                }
            }
});

let profile = createSlice({
    name : 'myProfile',
    initialState : { name : "ost", age : 25 },
    reducers : {
        changeMyName : (state, action) => {
            // return {...state, name : action.payload};
            state.name = action.payload;
        }
    }
});

export const {increaseNum, decreaseNum, increaseNumber} = numStore.actions;
export const {changeName, plusName} = strStore.actions;
export const {changeMyName} = profile.actions;

export default configureStore({
    reducer: {
        numStore: numStore.reducer,
        strStore: strStore.reducer,
        profile: profile.reducer
    }
});