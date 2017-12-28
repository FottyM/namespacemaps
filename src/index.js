import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import markerReducer from './reducers/markerReducer'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers({markerReducer}),
    {},
    applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> ,
    document.getElementById('root'));
registerServiceWorker();

