import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import  { createLogger }  from 'redux-logger'
import thunk from 'redux-thunk'

export default () => {  
	return createStore(
		rootReducer,
		applyMiddleware(thunk, createLogger())
	)
}