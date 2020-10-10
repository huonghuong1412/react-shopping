import * as types from './../constants'
import callAPI from './../callAPI/callAPI'


// GET ALL
export const getListAllProduct = (products) => {
    return {
        type: types.GET_ALL_PRODUCT,
        products
    }
}

export const fetchAllProductRequest = () => {
    return dispatch => {
        return callAPI('products', 'GET', null).then((res) => {
            dispatch(getListAllProduct(res.data))
        })
    }
}

// GET DETAIL
export const getProductDetail = (product) => {
    return {
        type: types.GET_PRODUCT_ITEM,
        product
    }
}

export const fetchProductDetailRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'GET', null).then((res) => {
            dispatch(getProductDetail(res.data))
        })
    }
}