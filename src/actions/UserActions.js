import * as types from '../constants'
import callAPI from '../callAPI/callAPI'

export const setLogin = (user) => {
    return {
        type: types.SET_LOGIN,
        user
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

// get order

export const getOrders = (orders) => {
    return {
        type: types.GET_ALL_ORDER,
        orders
    }
}

export const fetchAllOrders = () => {
    return dispatch => {
        return callAPI('orders', 'GET', null).then((res) => {
            dispatch(getOrders(res.data))
        })
    }
}