import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import projectReducer from './reducers/projectReducer';
import categoryReducer from './reducers/categoryReducer';

/*
const myLogger = (store) => (next) => (action) => {
	console.log('Logged Action: ', action);
	next(action);	
};
*/
			
export default createStore(
	combineReducers({projectReducer, categoryReducer}), 
	{}, 
	applyMiddleware(createLogger(), promise())
);