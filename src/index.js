import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import taskReducer from './reducers/taskReducer'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers({taskReducer}),
    {},
    applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> ,
    document.getElementById('root'));
registerServiceWorker();

