import { combineReducers } from 'redux';
import loading from './components/LoadingIndicator/LoadingIndicator.reducer';

import { POSTS_FETCH_REQUEST, POSTS_FETCH_SUCCESS, POSTS_FETCH_ERROR} from './constants'
import { COMMENTS_SHOW, COMMENTS_HIDE, COMMENTS_FETCH_REQUEST, COMMENTS_FETCH_SUCCESS, COMMENTS_FETCH_ERROR} from './constants'

const postsInitialState = {
    error: null,
    entities: []
};

const posts = (state = postsInitialState, action) => {
    switch (action.type) {
        case POSTS_FETCH_REQUEST:
            return {...state, error: null};
        case POSTS_FETCH_SUCCESS:
            return {...state, entities: action.payload};
        case POSTS_FETCH_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
};

const comments = (state = {}, action) => {
    switch (action.type) {
        case COMMENTS_FETCH_SUCCESS:
            const {comments, postId} = action.payload;
            return {...state, [postId]: comments};
        default:
            return state;
    }
};

const visibleCommentForPosts = (state = [], action) => {
    switch (action.type) {
        case COMMENTS_SHOW:
            return [...state, action.payload];
        case COMMENTS_HIDE:
            const index = state.indexOf(action.payload);
            return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
            ]
        default:
            return state;
    }
};

export default combineReducers({
    comments,
    posts,
    visibleCommentForPosts,
    loading
})