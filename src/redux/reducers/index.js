import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import courses from './courseReducer';

const rootReducer = combineReducers ({
    courses
});

export default rootReducer;