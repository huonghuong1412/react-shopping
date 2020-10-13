import { combineReducers } from 'redux'
import listProducts from './products'
import productItem from './productItem'
import modal from './modal'
import cart from './cart'
import comments from './comments'
import user from './user'
import userEdit from './userEdit'
import userLogin from './userLogin'
import blogs from './blogs'
import cmt from './cmtProducts'

const rootReducer = combineReducers({
    listProducts,
    productItem,
    modal,
    cart,
    comments,
    user,
    userEdit,
    userLogin,
    blogs,
    cmt
})

export default rootReducer