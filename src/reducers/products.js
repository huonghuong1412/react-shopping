import * as types from './../constants'
// import { findIndex } from 'lodash'

const initialState = [];

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_PRODUCT:
            state = action.products;
            return [...state];
        case types.SEARCH_LIST_PRODUCTS:
            state = action.products;
            return [...state];
        default:
            return state;
    }
}

export default myReducers