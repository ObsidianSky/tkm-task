import { REST_URL, MAX_POSTS_AMOUNT } from '../../constants'
import { POSTS_FETCH_REQUEST, POSTS_FETCH_SUCCESS, POSTS_FETCH_ERROR} from '../../constants'

import { fetchErrorHandler } from '../../utils'

const requestPosts = () => ({
    type: POSTS_FETCH_REQUEST
});

const requestPostsSuccess = (posts) => ({
    type: POSTS_FETCH_SUCCESS,
    payload: posts
});

const requestPostsError = (error) => ({
    type: POSTS_FETCH_ERROR,
    payload: error
});

export const fetchPosts = () => {
    return dispatch => {
        dispatch(requestPosts());
        return fetch(`${REST_URL}/posts`)
            .then(fetchErrorHandler)
            .then(response => response.json())
            //non fetch error could be dispatched if move this block on bottom of chain
            .then(json => dispatch(
                requestPostsSuccess(json.slice(0, MAX_POSTS_AMOUNT))
            ))
            .catch(error => {
                dispatch(requestPostsError(error.message)
                )});
    }
};

