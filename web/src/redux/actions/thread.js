import config from '../../config'
import * as MessageActions from './message'

export const loadThreads = (id) => {
	return (dispatch) => {
		fetch (`${config.url.apiHost}/threads/${id}`)
		.then (result => result.json())
		.then (threads => {
			dispatch({
				type: 'LOAD_THREADS',
				threads: threads
			})
			dispatch(selectThread(threads.find( t => !t.lastMessage.match)))
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
		dispatch(MessageActions.loadMessages(thread.id))
	}
}
