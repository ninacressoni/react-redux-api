import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers ({
    courses,
    authors
});

export default rootReducer;