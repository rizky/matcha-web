import { combineReducers } from 'redux'
import photo from './photo'
import users from './users'
import user from './user'
import authentication from './authentication'

const rootReducer = combineReducers({
	photos: photo,
	users: users,
	selectedUser: user,
	userContext: authentication
})

export default rootReducer