import * as types from '../constants'
import { decodeString, hashString } from '../actions/HashString'

const initialState = {
    listUser: [],
    userLogin: {},
    order: {}
}

export default (state = initialState, action) => {
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
        case types.IS_LOGINED:
            sessionStorage.setItem('user', hashString(JSON.stringify(action.user)))
            return {
                ...state
            }
        case types.GET_USER_LOGIN:
            var user = sessionStorage.getItem('user') ? JSON.parse(decodeString(sessionStorage.getItem('user'))) : {}
            return {
                ...state,
                userLogin: user
            }
        case types.IS_LOGOUT:
            return {
                ...state,
                userLogin: sessionStorage.removeItem('user')
            }
        case types.ADD_ORDER:
            return {
                ...state,
                order: action.order
            }
        default:
            return state;
    }
}