import React from 'react'
import { render } from 'react-dom'
import App from './App'
import configureStore from './redux/store'
import { Provider } from 'react-redux'

let initialState = {
	userContext: {
		id: 1,
		username: "vsawyer",
		name: "Virgil Sawyer",
		password: "3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		email: "sawyer@gmail.com",
		picture: "/img/profiles/no-pic.jpg",
		dob: "1989-05-30T00:00:00.000Z",
		lat: 46.528999,
		long: 6.5,
		activeAt: "2018-06-02T09:42:28.000Z",
	}
}

let store = configureStore(initialState)

export const dispatch = store.dispatch

render(
	<Provider store={store}>
   		<App />
  	</Provider>,
	document.getElementById('root')
)