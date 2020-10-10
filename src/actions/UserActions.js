import * as types from '../constants'
import callAPI from '../callAPI/callAPI'

export const setLogin = (user) => {
    return {
        type: types.IS_LOGINED,
        user
    }
}

function sendLoginRequest(account, userLogin) {
    if (account.email === userLogin.email && account.password === userLogin.password) {
        return true;
    } else {
        return false
    }
}

export function checkLogin(account, userLogin) {
    return dispatch => {
        if(sendLoginRequest(account, userLogin )) {
            dispatch(setLogin(account))
            return;
        } else {
            return;
        }
    }
}


export const getUserLogin = (user) => {
    return {
        type: types.GET_USER_LOGIN,
        user
    }
}

export const isLogout = () => {
    return {
        type: types.IS_LOGOUT
    }
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

// Order
export const userOrder = (order) => {
    return {
        type: types.ADD_ORDER,
        order
    }
}

export const fetchUserOrderRequest = (order) => {
    return dispatch => {
        return callAPI('orders', 'POST', order).then(res => {
            dispatch(userOrder(res.data))
        })
    }
}