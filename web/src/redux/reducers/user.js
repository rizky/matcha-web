
export default (selectedUser = null, action) => {
	switch (action.type) {
		case 'SELECT_USER':
			return (action.user)
		default:
			console.log(action)
			return (selectedUser)
	}
}