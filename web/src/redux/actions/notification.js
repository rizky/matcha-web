import config from '../../config'

export const loadNotifications = (id) => {
	return (dispatch) => {
		fetch (`${config.url.apiHost}/messages/to/${id}`)
		.then ( result => {
			return result.json()
		}).then( notifications => {
			dispatch({
				type: 'LOAD_NOTIFICATIONS',
				notifications: notifications
			})
		})
	}
}

export const readNotification = (id) => {
	return {
		type: 'READ_NOTIFICATION',
		id: id
	}
}