import { combineReducers } from 'redux'
import listProducts from './products'
import productItem from './productItem'
import modal from './modal'
import cart from './cart'

const rootReducer = combineReducers({
    listProducts,
    productItem,
    modal,
    cart
})

export default rootReducer