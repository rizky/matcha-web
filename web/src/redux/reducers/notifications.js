
export default (notifications = [], action) => {
	switch (action.type) {
		case 'LOAD_NOTIFICATIONS':
			return (action.notifications)
		default:
			return (notifications)
	}
}