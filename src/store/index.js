import { applyMiddleware, createStore } from 'redux';
// import articles from '../reducers/index';
import rootReducer from '../reducers/rootReducer';
// Logger with default options 
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

export default store;
