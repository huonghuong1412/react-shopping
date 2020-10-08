import { combineReducers } from 'redux'
import listProducts from './products'
import productItem from './productItem'
import modal from './modal'
import cart from './cart'
import comments from './comments'
import user from './user'
import userEdit from './userEdit'

const rootReducer = combineReducers({
    listProducts,
    productItem,
    modal,
    cart,
    comments,
    user,
    userEdit
})

export default rootReducer