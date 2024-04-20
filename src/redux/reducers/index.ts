import { combineReducers } from "@reduxjs/toolkit";
import reposReducer from "./reposReducer";

const reducers = combineReducers({
    repos: reposReducer,
});
export default reducers;
