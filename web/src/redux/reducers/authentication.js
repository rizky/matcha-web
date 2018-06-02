export default (userContext = null, action) => {
	switch (action.type) {
		case 'LOGIN':
			return (action.user)
		default:
			console.log(action)
			return (userContext)
	}
}
