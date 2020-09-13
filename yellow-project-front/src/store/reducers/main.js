import {AUTHENTICATION_LOGOUT, AUTHENTICATION_SUCCESS} from "../actions/actionTypes";

const initialState = {
    token: null
};

export default function mainReducer(state = initialState, action) {

    switch(action.type) {
        case AUTHENTICATION_SUCCESS:
            return {...state, token: action.token};
        case AUTHENTICATION_LOGOUT:
            return {...state, token: null};
        default:
            return state;
    }
}
