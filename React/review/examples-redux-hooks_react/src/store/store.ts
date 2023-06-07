import { createStore, combineReducers } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { usersReducer } from './reducers/usersReducer';
const allReducers = combineReducers({ root: rootReducer, users: usersReducer });

const store = createStore(allReducers);
export default store;