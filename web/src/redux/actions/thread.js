import config from '../../config'

export const loadThreads = (id) => {
	return (dispatch) => {
		fetch (`${config.url.apiHost}/threads/${id}`)
		.then ( result => {
			return result.json()
		}).then( threads => {
			dispatch({
				type: 'LOAD_THREADS',
				threads: threads
			})
			dispatch({
				type: 'SELECT_THREAD',
				thread: threads[0]
			})
		})
	}
}

export const addThread = (thread) => {
	return {
		type: 'ADD_THREAD',
		thread: thread
	}
}

export const deleteThread = (id) => {
	return {
	type: 'DELETE_THREAD',
	id: id
	}
}

export const selectThread = (thread) => {
	return (dispatch) => {
		dispatch({
			type: 'SELECT_THREAD',
			thread: thread
		})
		dispatch({
			type: 'READ_MESSAGE',
			id: thread.id
		})
	}
}
