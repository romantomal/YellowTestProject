import {
    AUTHENTICATION_LOGOUT,
    AUTHENTICATION_SUCCESS,
} from "./actionTypes";

export function auth() {
    return dispatch => {
        const token = 'dsad2344dsdasd';
        let date = new Date();
        date.setDate(date.getDate() + 1);
        const expirationDate = date;

        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate.toLocaleString());

        dispatch(authSuccess(token));
        dispatch(autoLogout(calculateLogoutTime(expirationDate)));
    }
}

export function authSuccess(token) {
    return {
        type: AUTHENTICATION_SUCCESS,
        token
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expirationDate');

        if (token && calculateLogoutTime(expirationDate) > 0) {
            dispatch(authSuccess(token));
            dispatch(autoLogout(calculateLogoutTime(expirationDate)));
        } else {
            dispatch(logout());
        }
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000);
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTHENTICATION_LOGOUT,
    }
}

function calculateLogoutTime(date) {
    const currentDate = new Date();
    const expirationDate = new Date(date);

    return (expirationDate - currentDate) / 1000;
}
