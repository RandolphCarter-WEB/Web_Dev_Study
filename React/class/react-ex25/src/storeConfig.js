import { configureStore } from '@reduxjs/toolkit';
import numReducer from "./store/numStore";
import strReducer from "./store/strStore";
import profileReducer from "./store/profileStore";

export default configureStore({
    reducer : {
        str : strReducer,
        num : numReducer,
        profile : profileReducer
    }
});