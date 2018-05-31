import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import  { createLogger }  from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
	applyMiddleware(thunk, createLogger())
)(createStore)

export default function configureStore(initialState = { photos: [] }) {
	return finalCreateStore(rootReducer, initialState)
}