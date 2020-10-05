import * as types from './../constants'
// import { findIndex } from 'lodash'

const initialState = {};

const myReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_PRODUCT_ITEM:
            state = action.product;
            return {...state};
        default:
            return state;
    }
}

export default myReducers