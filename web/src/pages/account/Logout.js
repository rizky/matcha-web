import React, { Component } from 'react'
import { dispatch } from '../../index'
import * as UserActions from '../../redux/actions/user'
import { Redirect } from 'react-router-dom'

class Logout extends Component {
	componentDidMount() {
		dispatch(UserActions.logout())
	}
	render() {
		return (
			<Redirect to="/" />
		)
	}
}

export default Logout
