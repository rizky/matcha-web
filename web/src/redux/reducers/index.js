import { combineReducers } from 'redux'
import photo from './photo'
import users from './users'
import user from './user'

const rootReducer = combineReducers({
	photos: photo,
	users: users,
	selectedUser: user
})

export default rootReducer