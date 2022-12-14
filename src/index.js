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
    }else if(action.type === 'CLEAR_ALL'){
        return ''
    }
    return state;
}
//reducer for understanding
const understanding = (state = '', action) => {
    if(action.type === 'SET_UNDERSTANDING'){
        return action.payload;
    }else if(action.type === 'CLEAR_ALL'){
        return ''
    }
    return state;
}
//reducer for support 
const support = (state = '', action) => {
    if(action.type === 'SET_SUPPORT'){
        return action.payload;
    }else if(action.type === 'CLEAR_ALL'){
        return ''
    }
    return state;
}
//reducer for the comments page 
const comments = (state = '', action) => {
    if(action.type === 'SET_COMMENTS'){
        return action.payload;
    }else if(action.type === 'CLEAR_ALL'){
        return ''
    }
    return state;
}


//reducer storage 
const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments,
    
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
    


