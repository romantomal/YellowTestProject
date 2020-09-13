import {CHANGE_MOBILE_MENU_VISIBILITY} from "../actions/actionTypes";

const initialState = {
    showMobileMenu: false
};

export default function menuReducer(state = initialState, action) {

    switch(action.type) {
        case CHANGE_MOBILE_MENU_VISIBILITY:
            return {...state, showMobileMenu: action.value};
        default:
            return state;
    }
}
