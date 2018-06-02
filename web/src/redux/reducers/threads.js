
export default (threads = [], action) => {
	switch (action.type) {
		case 'LOAD_THREADS':
			return (action.threads)
		case 'ADD_THREAD':
			return [action.thread, ...threads]
		case 'DELETE_THREAD':
			return threads.filter((thread) => {
				return (thread.id !== action.id)
			})
		default:
			return (threads)
	}
}