import {
    AUTHENTICATION_LOGOUT,
    AUTHENTICATION_SUCCESS,
} from "./actionTypes";
import axios from "../../theme/axios";

export function auth() {
    return async dispatch => {
        try {
            await axios.get('/v1/auth/token')
                .then((response) => {
                const {token, expirationDate} = response.data;

                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);

                dispatch(authSuccess(token));
                dispatch(autoLogout(calculateLogoutTime(expirationDate)));
            });
        } catch (error) {
            console.log(error)
        }
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
        } else if (token) {
            dispatch(logout());
        }
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time);
    }
}

export function logout() {
    const token = localStorage.getItem('token');
    try {
        axios.delete('/v1/auth/token', {params: {token}})
            .then(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('expirationDate');
            });
    } catch (error) {
        console.log(error)
    }
    return {
        type: AUTHENTICATION_LOGOUT,
    }
}

function calculateLogoutTime(date) {
    const currentDate = new Date();
    const expirationDate = new Date(date);

    return (expirationDate - currentDate) / 1000;
}
