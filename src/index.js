import React from 'react';
import ReactDOM from 'react-dom';
// import Redux from 'react-redux';
import { Provider } from "react-redux";
// import { createStore } from 'redux';
import store from './store/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getUsers, fetchUsers } from './actions/index';
import fetch from 'isomorphic-fetch';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const baseURL = 'https://randomuser.me/api';

// counter reeducer, defines how the state will change.
// const counterReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// defines our store object, store is defined in 'redux' module
// const store = createStore(counterReducer);

// this is a react component
// const Counter = ({ value, onIncrement, onDecrement }) => (
//     <div>
//         <h1>{value}</h1>
//         <button onClick={onIncrement}>+</button>
//         <button onClick={onDecrement}>-</button>
//     </div>
// )

// this is the rendor method
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Provider>,
        document.getElementById('root')
    );
};

// this is equal to the future connect. connect allows you to connect your
// react component to the store.
//
// store.subscribe(render, ExampleComponent);

// call the render function
render();

// 1) on startup , automatically load some user data!!!
// trigger the action GET_USERS
// store.dispatch({ type: 'GET_USERS' });
store.dispatch( dispatch => {
    dispatch({type: 'FETCH_USERS'});
    fetch(`${baseURL}/?results=10`)
    .then( resp => { return resp.json(); })
    .then( json => {
        console.log('json:', json.results);
        dispatch({type: 'FETCH_USERS_RECIEVED', payload: json})
    });
    dispatch({type: 'FETCH_USERS_SUCCESS'});
});

// store.dispatch(dixpatch => { dispatch(getUsers) });
// default create-react-app boilerplate
registerServiceWorker();
