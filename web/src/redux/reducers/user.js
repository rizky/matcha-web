
export default (users = [], action) => {
	switch (action.type) {
		case 'LOAD_USERS':
			console.log(action)
			return (action.users)
		case 'ADD_USER':
			console.log(action)
			return [action.user, ...users]
		case 'DELETE_USER':
			return users.filter((user) => {
				return (user.id !== action.id)
			})
		default:
			console.log(action)
			return (users);
	}
}