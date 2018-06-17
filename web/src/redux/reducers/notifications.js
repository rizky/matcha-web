
export default (notifications = [], action) => {
	switch (action.type) {
		case 'LOAD_NOTIFICATIONS':
			return (action.notifications)
		case 'READ_NOTIFICATION':
			return (notifications.map( n => {
				if (n.id === action.id)
				{
					n.read = true
					return n
				}
				else
					return n
			}))
		default:
			return (notifications)
	}
}