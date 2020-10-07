import * as types from '../constants'

function setLoginRequest(isLoginRequest) {
    return {
        type: types.LOGIN_REQUEST,
        isLoginRequest
    }
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: types.LOGIN_SUCCESS,
        isLoginSuccess
    }
}

function setLoginFail(isLoginFail) {
    return {
        type: types.LOGIN_FAILURE,
        isLoginFail
    }
}

export function login(email, password) {
    return dispatch => {
        dispatch(setLoginRequest(true));
        dispatch(setLoginSuccess(false))
        dispatch(setLoginFail(null));

        sendLoginRequest(email, password).then((success) => {
            dispatch(setLoginRequest(false))
            dispatch(setLoginSuccess(true))
        }).catch(err => {
            dispatch(setLoginRequest(false))
            dispatch(setLoginFail(err))
        })
    }
}

function sendLoginRequest(email, password) {
    return new Promise((resolve, reject) => {
        if (email === "huong@gmail.com" && password === "123") {
            return resolve(true)
        } else {
            return reject(new Error("Sai email hoac pass"))
        }
    })
}