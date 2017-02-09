import { REST_URL } from '../../constants'
import { fetchErrorHandler } from '../../utils'

export const deletePost = (postId) => (
    dispatch => {
        dispatch({
            type: 'POSTS_DELETE_REQUEST'
        });

        return fetch(`${REST_URL}/posts/${postId}`, {
            method: 'DELETE'
        })
            .then(fetchErrorHandler)
            .then(response => dispatch({
                type: 'POSTS_DELETE_SUCCESS',
                payload: postId
            }))
            .catch(error => {
                dispatch({
                    type: 'POSTS_DELETE_ERROR'
                })
            })
    }
);