import {AUTHENTICATION_LOGOUT, AUTHENTICATION_SUCCESS} from "../actions/actionTypes";

const initialState = {
    authToken: false
};

export default function mainReducer(state = initialState, action) {

    switch(action.type) {
        case AUTHENTICATION_SUCCESS:
            return {...state, authToken: action.token};
        case AUTHENTICATION_LOGOUT:
            return {...state, authToken: null};
        default:
            return state;
    }
}
