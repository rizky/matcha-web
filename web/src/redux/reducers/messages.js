
export default (messages = [], action) => {
	switch (action.type) {
		case 'LOAD_MESSAGES':
			return (action.messages)
		case 'ADD_MESSAGE':
			return [...messages, action.message]
		case 'DELETE_MESSAGE':
			return messages.filter((message) => {
				return (message.id !== action.id)
			})
		case 'UPDATE_MESSAGE':
			return (messages.map( m => {
				if (m.id === action.message.id)
					return action.message
				else
					return m
			}))
		default:
			return (messages)
	}
}