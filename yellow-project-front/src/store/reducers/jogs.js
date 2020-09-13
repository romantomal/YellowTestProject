import {
    CHANGE_SHOW_DATE_FILTER_VALUE, CREATE_JOG_START, CREATE_JOG_SUCCESS,
    FETCH_JOGS_ERROR,
    FETCH_JOGS_START,
    FETCH_JOGS_SUCCESS,
    REDIRECT_TO_URL, REDIRECT_TO_URL_SUCCESS,
    SAVE_FILTERED_JOGS
} from "../actions/actionTypes";

const initialState = {
    jogs: [],
    jogsFiltered: [],
    showDateFilter: false,
    loading: false,
    jogsCreatorRender: false,
    redirect: false,
    redirectUrl: ''
};

export default function jogsReducer(state = initialState, action) {

    switch(action.type) {
        case FETCH_JOGS_START:
            return {...state, loading: true};
        case FETCH_JOGS_SUCCESS:
            return {...state, loading: false, jogs: action.jogs, jogsFiltered: action.jogs};
        case FETCH_JOGS_ERROR:
            return {...state, loading: false};
        case SAVE_FILTERED_JOGS:
            return {...state, jogsFiltered: action.filteredJogs};
        case REDIRECT_TO_URL:
            return {...state, redirect: true, redirectUrl: action.url};
        case REDIRECT_TO_URL_SUCCESS:
            return {...state, redirect: false, redirectUrl: ''};
        case CHANGE_SHOW_DATE_FILTER_VALUE:
            return {...state, showDateFilter: action.value};
        case CREATE_JOG_START:
            return {...state, loading: true};
        case CREATE_JOG_SUCCESS:
            return {...state, loading: false, jogs: action.jogs, jogsFiltered: action.jogs};
        default:
            return state;
    }
}
