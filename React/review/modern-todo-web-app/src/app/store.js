import { createStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import todoReducer from "../features/todoSlice";

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("state");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
});

const persistedStore = loadFromLocalStorage();

export const store = createStore(
  rootReducer,
  persistedStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
