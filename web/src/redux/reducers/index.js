import { combineReducers } from 'redux'
import photo from './photo'
import users from './users'
import selectedThread from './thread'
import threads from './threads'
import messages from './messages'
import authentication from './authentication'

const rootReducer = combineReducers({
	photos: photo,
	users: users,
	threads: threads,
	selectedThread: selectedThread,
	userContext: authentication,
	messages: messages
})

export default rootReducer