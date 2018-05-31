import { combineReducers } from 'redux'
import photo from './photo'

const rootReducer = combineReducers({
	photos: photo
})

export default rootReducer