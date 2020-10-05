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

// GET BY CATEGORY
export const getProductsByCategoryRequest = (category) => {
    return (dispatch) => {
        return callAPI(`products/?category=${category}`, 'GET', null).then((res) => {
            dispatch(getProductsByCategory(res.data))
        })
    }
}

export const getProductsByCategory = (products) => {
    return {
        type: types.GET_LIST_PRODUCT_BY_CATEGORY,
        products
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