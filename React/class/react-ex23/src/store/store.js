import {configureStore, createSlice} from "@reduxjs/toolkit";

let num = createSlice({
    name : "num",
    initialState : 3
})

export default configureStore({
    reducer : {
        num : num.reducer
    }
}) 