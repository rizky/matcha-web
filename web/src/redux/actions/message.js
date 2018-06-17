import config from '../../config'
 
export const loadMessages = (id) => {
	return (dispatch) => {
		fetch (`${config.url.apiHost}/messages/thread/${id}`)
		.then (result => result.json())
		.then (messages => {
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
		dispatch({
			type: 'UPDATE_THREADS',
			thread: { ...message.thread,  lastMessage: message}
		})
	}
}

export const deleteMessage = (id) => {
	return {
		type: 'DELETE_MESSAGE',
		id: id
	}
}

export const readMessage = (message) => {
	fetch (`${config.url.apiHost}/messages/`, {
		method: 'PUT',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({id: message.id, read: true})
	})	
	return (dispatch) => {
		dispatch({
			type: 'UPDATE_MESSAGE',
			message: message
		})
		dispatch({
			type: 'UPDATE_THREAD',
			message: message
		})
		dispatch({
			type: 'UPDATE_NOTIFICATION',
			message: message
		})
	}
}