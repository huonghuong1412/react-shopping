import * as types from '../constants'
import callAPI from '../callAPI/callAPI'

export const sendComment = (comment) => {
    return {
        type: types.SEND_COMMENT,
        comment
    }
}

export const sendCommentRequest = (comment) => {
    return dispatch => {
        return callAPI('comments', 'POST', comment).then(res => {
            dispatch(sendComment(res.data))
        })
    }
}