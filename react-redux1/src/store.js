import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import promise from 'redux-promise-middleware';

/*
const myLogger = (store) => (next) => (action) => {
	console.log('Logged Action: ', action);
	next(action);	
};
*/

export default createStore(
	combineReducers({userReducer}), 
	{}, 
	applyMiddleware(createLogger(), promise())
);