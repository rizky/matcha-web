import config from '../../config'
 
export const loadMessages = (id) => {
	return (dispatch) => {
		dispatch(readMessage(id))
		fetch (`${config.url.apiHost}/messages/thread/${id}`)
		.then ( result => {
			return result.json()
		}).then( messages => {
			dispatch({
				type: 'LOAD_MESSAGES',
				messages: messages
			})
		})
	}
}

export const addMessage = (message) => {
	let msg = {
		thread: message.thread.id,
		message: message.message,
		from: message.from.id,
		to: message.to.id
	}
	fetch (`${config.url.apiHost}/messages/`, {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(msg)
	})
	return (dispatch) => {
		dispatch({
			type: 'ADD_MESSAGE',
			message: message
		})
		message.thread.lastMessage = message
		dispatch({
			type: 'UPDATE_THREADS',
			thread: message.thread,
		})
	}
}

export const deleteMessage = (id) => {
	return {
		type: 'DELETE_MESSAGE',
		id: id
	}
}

export const readMessage = (id) => {
	let msg = {
		id: id,
		read: true,
	}
	fetch (`${config.url.apiHost}/messages/`, {
		method: 'PUT',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(msg)
	})
	return (dispatch) => {
		dispatch({
			type: 'READ_MESSAGE',
			id: id
		})
		dispatch({
			type: 'READ_THREAD',
			id: id
		})
		dispatch({
			type: 'READ_NOTIFICATION',
			id: id
		})
	}
}