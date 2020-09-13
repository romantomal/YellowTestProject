import {
    CHANGE_SHOW_DATE_FILTER_VALUE, CREATE_JOG_START, CREATE_JOG_SUCCESS,
    FETCH_JOGS_ERROR,
    FETCH_JOGS_START,
    FETCH_JOGS_SUCCESS,
    REDIRECT_TO_URL, REDIRECT_TO_URL_SUCCESS,
    SAVE_FILTERED_JOGS
} from "./actionTypes";
import axios from "../../theme/axios";

export function fetchJogs() {
    return async dispatch => {
        dispatch(fetchJogsStart());
        try {
            const token = localStorage.getItem('token');
            await axios.get('/v1/jogs', {params: {token}})
                .then((response) => {
                    const jogs = response.data || [];
                    dispatch(fetchJogsSuccess(jogs));
                });
        } catch (error) {
            dispatch(fetchJogsError(error));
        }
    }
}

export function createNewJog(date, speed, distance, time) {
    return async dispatch => {
        dispatch(createJogStart());
        try {
            const token = localStorage.getItem('token');
            await axios.post('/v1/jogs', {params: {token, date, speed, distance, time}})
                .then((response) => {
                    const jogs = response.data || [];
                    dispatch(createJogSuccess(jogs));
                });
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

export function createJogStart() {
    return {
        type: CREATE_JOG_START
    }
}

export function createJogSuccess(jogs) {
    return {
        type: CREATE_JOG_SUCCESS,
        jogs
    }
}

export function startRedirectToUrl(url) {
    return {
        type: REDIRECT_TO_URL,
        url
    }
}
