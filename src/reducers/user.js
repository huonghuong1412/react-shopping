import * as types from '../constants'
export default function reducer(state = {
    isLoginRequest: false,
    isLoginSuccess: false,
    isLoginFail: null
}, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
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