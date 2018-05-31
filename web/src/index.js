import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import configureStore from './redux/store'
import { Provider } from 'react-redux'

let initialState = {
	photos: [{
		id: '0000000001',
		url: '/img/photos/40547073-32d77e60-6031-11e8-8f8c-5e9429224498.jpg',
		user: {username : 'Admin'}
	}]
}
  
let store = configureStore(initialState)

render(
	<Provider store={store}>
   		<App />
  	</Provider>,
	document.getElementById('root')
);