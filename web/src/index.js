import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import configureStore from './redux/store'
import { Provider } from 'react-redux'

let initialState = {
	photos: []
}
  
let store = configureStore(initialState)

export const dispatch = store.dispatch

render(
	<Provider store={store}>
   		<App />
  	</Provider>,
	document.getElementById('root')
);