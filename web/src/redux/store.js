import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import  { createLogger }  from 'redux-logger'
import thunk from 'redux-thunk'

export default (initialState = null) => {  
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk, createLogger())
	)
}