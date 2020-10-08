import * as types from '../constants'
export default function reducer(state = {
    listUser: [],
    isLoginRequest: false,
    isLoginSuccess: false,
    isLogined: false,
    isLoginFail: null
}, action) {
    switch (action.type) {
        case types.LIST_USER:
            return {
                ...state,
                listUser: action.accounts
            }
        case types.CHANGE_INFOMATION:
            var id = action.account.id;
            state.listUser[id] = action.account;
            return {
                ...state,
                listUser: action.account
            }
        case types.ADD_USER:
            return {
                ...state,
                listUser: action.user
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            }
        case types.IS_LOGINED:
            return {
                ...state,
                isLogined: action.isLogined
            }
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoginRequest: action.isLoginRequest
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoginFail: action.isLoginFail
            }
        default:
            return state;
    }
}