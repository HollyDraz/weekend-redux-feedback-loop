import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

//reducer for Feelings 
const feeling = (state = '', action) => {
    if(action.type === 'SET_FEELING'){
        return action.payload;
    }
    return state;
}


//reducer storage 
const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feeling,
    
        }
    ),
    applyMiddleware(logger)
);






ReactDOM.render(
    <Provider store={storeInstance}>
            <App/>
    </Provider>,
    document.getElementById('root'));
    registerServiceWorker();
    


