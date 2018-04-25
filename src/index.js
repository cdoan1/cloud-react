import React from 'react';
import ReactDOM from 'react-dom';
// import Redux from 'react-redux';
import { createStore } from 'redux';

import './index.css';
// import App from './App';
import ExampleComponent from './components/ExampleComponent';

import registerServiceWorker from './registerServiceWorker';

// counter reeducer, defines how the state will change.
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// defines our store object, store is defined in 'redux' module
const store = createStore(counterReducer);

// this is a react component
const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

// this is the rendor method
const render = () => {
    ReactDOM.render(
        <div>
            <p>Counter 1</p>
            <Counter 
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })} 
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
            <p>Counter 2</p>
            <Counter 
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })} 
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
            <div>
                <div>
                    <p>Nested Counter</p>
                    <Counter 
                        value={store.getState()}
                        onIncrement={() => store.dispatch({ type: 'INCREMENT' })} 
                        onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
                </div>
            </div>
            <div>
                <div>
                    <ExampleComponent />
                </div>
            </div>

        </div>, 
        document.getElementById('root')
    );
};

// this is equal to the future connect. connect allows you to connect your
// react component to the store.
//
store.subscribe(render);

// call the render function
render();

// default create-react-app boilerplate
registerServiceWorker();
