import config from '../../config'

export const loadUsers = () => {
	return (dispatch) => {
		fetch (`${config.url.apiHost}/users`)
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

export const selectUser = (user) => {
	return {
		type: 'SELECT_USER',
		user: user
	}
}

export const login = (user) => {
	return {
		type: 'LOGIN',
		user: user
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT'
	}
}