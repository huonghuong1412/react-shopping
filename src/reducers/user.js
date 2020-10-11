import * as types from '../constants'

const initialState = {
    listUser: [],
    order: {},
    orders: []
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
        case types.ADD_ORDER:
            return {
                ...state,
                order: action.order
            }
        case types.GET_ALL_ORDER:
            return {
                ...state,
                orders: action.orders
            }
        default:
            return state;
    }
}