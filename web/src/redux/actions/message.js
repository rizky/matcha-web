import config from '../../config'

export const loadMessages = (id) => {
	return (dispatch) => {
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
	return {
		type: 'ADD_MESSAGE',
		message: message
	}
}

export const deleteMessage = (id) => {
	return {
	type: 'DELETE_MESSAGE',
	id: id
	}
}