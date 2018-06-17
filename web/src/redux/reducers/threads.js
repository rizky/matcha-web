
export default (threads = [], action) => {
	switch (action.type) {
		case 'LOAD_THREADS':
			return (action.threads.sort( (a, b) => Date.parse(a.lastMessage.createdAt) < Date.parse(b.lastMessage.createdAt) ))
		case 'ADD_THREAD':
			return [action.thread, ...threads]
		case 'DELETE_THREAD':
			return threads.filter((thread) => {
				return (thread.id !== action.id)
			})
		case 'READ_THREAD':
			return (threads.map( m => {
				if (m.lastMessage.id === action.id)
				{
					m.lastMessage.read = true
					return m
				}
				else
					return m
			}))
		default:
			return (threads)
	}
}