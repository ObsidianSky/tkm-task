import { MAX_POSTS_AMOUNT, MAX_COMMENTS_AMOUNT } from './constants'
import { POSTS_FETCH_REQUEST, POSTS_FETCH_SUCCESS, POSTS_FETCH_ERROR} from './constants'
import { COMMENTS_SHOW, COMMENTS_HIDE, COMMENTS_FETCH_REQUEST, COMMENTS_FETCH_SUCCESS, COMMENTS_FETCH_ERROR } from './constants'
import { REST_URL } from './constants'

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

const requestComments = () => ({
    type: COMMENTS_FETCH_REQUEST
});

const requestCommentsSuccess = (comments, postId) => ({
    type: COMMENTS_FETCH_SUCCESS,
    payload: {
        postId,
        comments
    }
});

const requestCommentsError = (error) => ({
    type: COMMENTS_FETCH_ERROR,
    payload: error
});

const showComments = (postId) => ({
    type: COMMENTS_SHOW,
    payload: postId
});

const hideComments = (postId) => ({
    type: COMMENTS_HIDE,
    payload: postId
});

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText || 'Some error occurred.');
    }
    return response;
}

export function fetchPosts() {
    return dispatch => {
        dispatch(requestPosts());
        return fetch(REST_URL+'/posts')
            .then(handleErrors)
            .then(response => response.json())
            //non fetch error could be dispatched if move this block on bottom of chain
            .then(json => dispatch(
                requestPostsSuccess(json.slice(0, MAX_POSTS_AMOUNT))
            ))
            .catch(error => {
                dispatch(requestPostsError(error.message)
            )});
    }
}

function fetchComments(postId) {
    return dispatch => {
        dispatch(requestComments());
        return fetch(REST_URL+'/posts/'+postId+'/comments')
            .then(handleErrors)
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(
                requestCommentsSuccess(json.slice(0, MAX_COMMENTS_AMOUNT), postId)
            ))
            .catch(error => {
                dispatch(requestCommentsError(error.message)
            )})
    }
}

export const toggleComments = (postId) => (
    (dispatch, getState) => {
        const { visibleCommentForPosts, comments } = getState();

        if(comments[postId]) {
            dispatch(visibleCommentForPosts.includes(postId) ? hideComments(postId) : showComments(postId));
        } else {
            dispatch(fetchComments(postId))
                .then(() => dispatch(showComments(postId)));
        }
    }
);