import {CHANGE_MOBILE_MENU_VISIBILITY} from "./actionTypes";

export function changeMobileMenuVisibility(value) {
    return dispatch => {
        dispatch({
            type: CHANGE_MOBILE_MENU_VISIBILITY,
            value
        })
    }
}
