import { combineReducers, legacy_createStore as createStore } from "redux";
import universitiesReducer from "./reducers";

const myReducer = combineReducers({ universitiesReducer });

export const store = createStore(myReducer);
