import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import  { createLogger }  from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore() {  
  return createStore(
    rootReducer,
    applyMiddleware(thunk, createLogger())
  );
}