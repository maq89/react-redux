import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './container/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'));
registerServiceWorker();


/*
store.subscribe(() => {
	console.log("Store update!", store.getState());
});
*/
