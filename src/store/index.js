import { applyMiddleware, createStore } from 'redux';
// import articles from '../reducers/index';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

// Logger with default options 
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        promise,
        thunk
    )
);

export default store;
