import { combineReducers } from 'redux'
import photo from './photo'
import user from './user'

const rootReducer = combineReducers({
	photos: photo,
	users: user
})

export default rootReducer