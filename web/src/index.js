import React from 'react'
import { render } from 'react-dom'
import App from './App'
import configureStore from './redux/store'
import { Provider } from 'react-redux'

let store = configureStore()

export const dispatch = store.dispatch

render(
	<Provider store={store}>
   		<App />
  	</Provider>,
	document.getElementById('root')
)