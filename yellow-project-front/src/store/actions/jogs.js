import {JogModel} from "../../containers/Jogs/models/JogModel";
import {
    CHANGE_SHOW_DATE_FILTER_VALUE,
    FETCH_JOGS_ERROR,
    FETCH_JOGS_START,
    FETCH_JOGS_SUCCESS,
    REDIRECT_TO_URL, REDIRECT_TO_URL_SUCCESS,
    SAVE_FILTERED_JOGS
} from "./actionTypes";

export function fetchJogs() {
    return dispatch => {
        dispatch(fetchJogsStart());
        try {
            let jogs = [];
            jogs.push(new JogModel('23.11.1994', 24, 22, 22));
            jogs.push(new JogModel('23.11.2001', 24, 22, 22));
            jogs.push(new JogModel('23.11.2008', 24, 22, 22));
            jogs.push(new JogModel('23.11.2020', 24, 22, 22));
            dispatch(fetchJogsSuccess(jogs));
        } catch (error) {
            dispatch(fetchJogsError(error));
        }
    }
}

export function saveFilteredJogs(filteredJogs) {
    return dispatch => {
        dispatch({
            type: SAVE_FILTERED_JOGS,
            filteredJogs
        })
    }
}

export function changeJogsDateFilterVisibility(value) {
    return dispatch => {
        dispatch({
            type: CHANGE_SHOW_DATE_FILTER_VALUE,
            value
        })
    }
}

export function redirectToUrl(url) {
    return dispatch => {
        dispatch(startRedirectToUrl(url));
    }
}

export function redirectSuccess() {
    return dispatch => {
        dispatch({type: REDIRECT_TO_URL_SUCCESS});
    }
}

export function fetchJogsStart() {
    return {
        type: FETCH_JOGS_START
    }
}

export function fetchJogsSuccess(jogs) {
    return {
        type: FETCH_JOGS_SUCCESS,
        jogs
    }
}

export function fetchJogsError(error) {
    return {
        type: FETCH_JOGS_ERROR,
        error
    }
}

export function startRedirectToUrl(url) {
    return {
        type: REDIRECT_TO_URL,
        url
    }
}
