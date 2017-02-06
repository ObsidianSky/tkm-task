import { MAX_POSTS_AMOUNT } from './constants'
import { POSTS_FETCH_REQUEST, POSTS_FETCH_SUCCESS, POSTS_FETCH_ERROR} from './constants'

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

export function fetchPosts() {
    const root = 'https://jsonplaceholder.typicode.com';
    return dispatch => {
        dispatch(requestPosts());
        fetch(root+'/posts')
            .then(response => response.json())
            .then(json => dispatch(
                requestPostsSuccess(json.slice(0, MAX_POSTS_AMOUNT))
            ))
            .catch(error => {
                dispatch(requestPostsError(error.message)
            )});
    }
}