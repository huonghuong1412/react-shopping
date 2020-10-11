import * as types from '../constants'

const userLogin = JSON.parse((sessionStorage.getItem('user')))

const initialState = userLogin ? userLogin : {}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.SET_LOGIN:
            state = action.user
            sessionStorage.setItem('user', (JSON.stringify(state)))
            return {...state};
        case types.IS_LOGOUT:
            sessionStorage.removeItem('user');
            return {
                ...state
            }
        case types.GET_USER_LOGIN:
            JSON.parse((sessionStorage.getItem('user')))
            return {
                ...state
            }
        default:
            return {...state}
    }
}