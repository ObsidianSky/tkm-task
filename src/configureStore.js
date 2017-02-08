import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = reduxLogger();

export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                thunk,
                logger
            )
        )
    )
}

