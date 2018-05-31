import { combineReducers } from 'redux'
import photoReducer from './photoReducer'

const rootReducer = combineReducers({
	photos: photoReducer
})

export default rootReducer