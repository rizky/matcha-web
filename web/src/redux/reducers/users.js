
export default (users = [], action) => {
	switch (action.type) {
		case 'LOAD_USERS':
			return (action.users)
		case 'ADD_USER':
			return [action.user, ...users]
		case 'DELETE_USER':
			return users.filter((user) => {
				return (user.id !== action.id)
			})
		default:
			return (users)
	}
}