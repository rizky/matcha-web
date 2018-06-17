
export default (threads = [], action) => {
	switch (action.type) {
		case 'LOAD_THREADS':
			return (action.threads.sort((a, b) => Date.parse(a.lastMessage.createdAt) < Date.parse(b.lastMessage.createdAt) ))
		case 'UPDATE_THREADS':
			let _threads = threads.map(t => t.id === action.thread.id ? action.thread : t)
			return (_threads.sort((a, b) => Date.parse(a.lastMessage.createdAt) < Date.parse(b.lastMessage.createdAt) ))
		case 'ADD_THREAD':
			return [action.thread, ...threads]
		case 'DELETE_THREAD':
			return threads.filter(thread => thread.id !== action.id)
		case 'UPDATE_THREAD':
			return (threads.map( m => {
				if (m.lastMessage.id === action.message.id)
					return { ...m, lastMessage: action.message }
				else
					return m
			}))
		default:
			return (threads)
	}
}