import { POSTS_FETCH_REQUEST, POSTS_FETCH_SUCCESS, POSTS_FETCH_ERROR} from './constants'

const initialState = {
    fetching: false,
    error: null,
    posts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case POSTS_FETCH_REQUEST:
            return { ...state, fetching: true, error: null};
        case POSTS_FETCH_SUCCESS:
            return { ...state, fetching: false, posts: action.payload};
        case POSTS_FETCH_ERROR:
            return { ...state, fetching: false, error: action.payload};
        default:
            return state;
    }
}