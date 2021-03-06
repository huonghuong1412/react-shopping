import * as types from './../constants'

export const showModal = ({ modalProps, modalType }) => dispatch => {
    dispatch({
        type: types.SHOW_MODAL,
        modalProps,
        modalType
    })
}

export const hideModal = () => dispatch => {
    dispatch({
        type: types.HIDE_MODAL
    })
}