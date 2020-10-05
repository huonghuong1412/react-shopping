import { combineReducers } from 'redux'
import listProducts from './products'
import productItem from './productItem'

const rootReducer = combineReducers({
    listProducts,
    productItem
})

export default rootReducer