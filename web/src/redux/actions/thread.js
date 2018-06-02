import config from '../../config'

export const loadThreads = (id) => {
	return (dispatch) => {
		console.log(`${config.url.apiHost}/threads/${id}`);
		
		fetch (`${config.url.apiHost}/threads/${id}`)
		.then ( result => {
			return result.json()
		}).then( threads => {
			dispatch({
				type: 'LOAD_THREADS',
				threads: threads
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
	return {
		type: 'SELECT_THREAD',
		thread: thread
	}
}
