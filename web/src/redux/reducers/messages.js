
export default (messages = [], action) => {
	switch (action.type) {
		case 'LOAD_MESSAGES':
			console.log(action)
			return (action.messages)
		case 'ADD_MESSAGE':
			console.log(action)
			return [action.message, ...messages]
		case 'DELETE_MESSAGE':
			return messages.filter((message) => {
				return (message.id !== action.id)
			})
		default:
			console.log(action)
			return (messages)
	}
}