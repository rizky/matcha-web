
export default (threads = [], action) => {
	switch (action.type) {
		case 'LOAD_THREADS':
			console.log(action)
			return (action.threads)
		case 'ADD_THREAD':
			console.log(action)
			return [action.thread, ...threads]
		case 'DELETE_THREAD':
			return threads.filter((thread) => {
				return (thread.id !== action.id)
			})
		default:
			console.log(action)
			return (threads)
	}
}