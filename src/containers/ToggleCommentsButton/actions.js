import { MAX_COMMENTS_AMOUNT, REST_URL } from '../../constants'
import { COMMENTS_SHOW, COMMENTS_HIDE, COMMENTS_FETCH_REQUEST, COMMENTS_FETCH_SUCCESS, COMMENTS_FETCH_ERROR } from '../../constants'
import { fetchErrorHandler } from '../../utils'

const showComments = (postId) => ({
    type: COMMENTS_SHOW,
    payload: postId
});

const hideComments = (postId) => ({
    type: COMMENTS_HIDE,
    payload: postId
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


const fetchComments = (postId) => {
    return dispatch => {
        dispatch(requestComments());
        return fetch(`${REST_URL}/posts/${postId}/comments`)
            .then(fetchErrorHandler)
            .then(response => {
                return response.json()
            })
            .then(json => dispatch(
                requestCommentsSuccess(json.slice(0, MAX_COMMENTS_AMOUNT), postId)
            ))
            .catch(error => {
                dispatch(requestCommentsError(error.message))
            })
    }
};

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
