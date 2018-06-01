export const loadUsers = () => {
	return (dispatch) => {
		fetch (`http://localhost:81/users`)
		.then ( result => {
			return result.json()
		}).then( users => {
			dispatch({
				type: 'LOAD_USERS',
				users: users
			})
		})
	}
}

export const addUser = (user) => {
	return {
		type: 'ADD_USER',
		user: user
	}
}

export const deleteUser = (id) => {
	return {
	type: 'DELETE_USER',
	id: id
	}
}