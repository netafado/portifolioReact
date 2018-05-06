import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import promiseRedux from 'redux-promise'

import reducers from './reducers'

const applyStoreWithMiddeware  = applyMiddleware(promiseRedux)(createStore)

ReactDOM.render(
    
    <Provider store={applyStoreWithMiddeware(reducers)}>
        <App />
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
