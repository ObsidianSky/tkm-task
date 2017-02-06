import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

const logger = reduxLogger();

export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            logger
        )
    )
}

