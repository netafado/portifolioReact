import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import promiseRedux from 'redux-promise'
import HttpsRedirect from 'react-https-redirect'

import reducers from './reducers'

const applyStoreWithMiddeware  = applyMiddleware(promiseRedux)(createStore)

ReactDOM.render(
    
    <Provider store={applyStoreWithMiddeware(reducers)}>
        <HttpsRedirect>
            <App />
        </HttpsRedirect>        
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
