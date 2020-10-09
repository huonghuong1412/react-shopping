import * as types from '../constants'
import callAPI from '../callAPI/callAPI'
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

function isLogined(isLogined, user) {
    return {
        type: types.IS_LOGINED,
        isLogined,
        user
    }
}

export function login({ account, user }) {
    return dispatch => {
        dispatch(setLoginRequest(true));
        dispatch(setLoginSuccess(false));
        dispatch(isLogined(false))
        dispatch(setLoginFail(null));

        sendLoginRequest({ account, user }).then((success) => {
            dispatch(setLoginRequest(false))
            dispatch(setLoginSuccess(true))
            dispatch(isLogined(true, user))
        }).catch(err => {
            dispatch(setLoginRequest(false))
            dispatch(setLoginFail(err))
        })
    }
}

function sendLoginRequest({ account, user }) {
    return new Promise((resolve, reject) => {
        if (account.email === user.email && account.password === user.password) {
            return resolve(true)
        } else {
            return reject(new Error("Sai email hoac pass"))
        }
    })
}

export const getListAccount = (accounts) => {
    return {
        type: types.LIST_USER,
        accounts
    }
}

export const fetchAccountsRequest = () => {
    return dispatch => {
        return callAPI('users', "GET", null).then((res) => {
            dispatch(getListAccount(res.data))
        })
    }
}

// register account

export const addUser = (user) => {
    return {
        type: types.ADD_USER,
        user
    }
}

export const fetchAddUserRequest = (account) => {
    return dispatch => {
        return callAPI(`users`, 'POST', account).then((res) => {
            dispatch(addUser(res.data))
        })
    }
}


// Update
export const changeInfo = (account) => {
    return {
        type: types.CHANGE_INFOMATION,
        account
    }
}

export const fetchChangeInfoRequest = (account) => {
    return dispatch => {
        return callAPI(`users/${account.id}`, 'PUT', account).then((res) => {
            dispatch(changeInfo(res.data))
        })
    }
}

// GET ACCOUNT Change
export const changeInfoGet = (account) => {
    return {
        type: types.EDIT_INFO_BY_ACCOUNT,
        account
    }
}

export const fetchChangeInfoGet = (id) => {
    return dispatch => {
        return callAPI(`users/${id}`, 'GET', null).then((res) => {
            dispatch(changeInfoGet(res.data))
        })
    }
}