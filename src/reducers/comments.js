import * as types from '../constants'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_COMMENT:
            state.push(action.comment)
            return [...state];
        default:
            return [...state]
    }
}