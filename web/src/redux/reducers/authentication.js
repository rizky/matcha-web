export default (userContext = null, action) => {
	switch (action.type) {
		case 'LOGIN':
			return (action.user)
		case 'LOGOUT':
			return (null)
		default:
			console.log(action)
			return (userContext)
	}
}
