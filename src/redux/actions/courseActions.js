import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(course) {
    return {type: types.LOAD_COURSES_SUCCESS, course};
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getCourses().then(course => {
            dispatch(loadCourseSuccess(course));
        }).catch(error => {
            throw error;
        })
    }
}