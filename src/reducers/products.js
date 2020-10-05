import * as types from './../constants'
// import { findIndex } from 'lodash'

const initialState = [];

const myReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ALL_PRODUCT:
            state = action.products;
            return [...state];
        case types.GET_LIST_PRODUCT_BY_CATEGORY:
            state = action.products;
            return [...state];
        default:
            return state;
    }
}

export default myReducers