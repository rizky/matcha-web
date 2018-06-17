
export default (notifications = [], action) => {
	switch (action.type) {
		case 'LOAD_NOTIFICATIONS':
			return (action.notifications)
		case 'UPDATE_NOTIFICATION':
			return (notifications.map( n => {
				if (n.id === action.message.id)
					return action.message
				else
					return n
			}))
		default:
			return (notifications)
	}
}