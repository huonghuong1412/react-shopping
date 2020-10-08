import * as types from '../constants'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_INFO_BY_ACCOUNT:
            return { ...action.account }
        default:
            return { ...state }
    }
}