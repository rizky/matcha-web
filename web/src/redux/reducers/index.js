import { combineReducers } from 'redux'
import photo from './photo'
import users from './users'
import user from './user'
import threads from './threads'
import authentication from './authentication'

const rootReducer = combineReducers({
	photos: photo,
	users: users,
	threads: threads,
	selectedUser: user,
	userContext: authentication
})

export default rootReducer