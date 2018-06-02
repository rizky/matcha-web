import React, { Component } from 'react'
import { dispatch } from '../../index'
import * as UserActions from '../../redux/actions/user'

class Login extends Component {
	componentDidMount() {
		let user = {
			id: '000000001',
			name: 'Guest'
		}
		dispatch(UserActions.login(user))
	}

	render() {
		return (
			<div className="forms">
				<h1>Login</h1>
				<form action='/account/login' method='POST'>
					<input type='text' name='username' placeholder='Username'/>
					<hr/>
					<input type='password' name='password' placeholder='Password' value=''/>
					<hr/>
					<button type='submit'>Login</button>
					<a href='/account/recover'>Forgot password?</a>
					<div>Don't have an account? <a href='/account/registration'>Sign Up</a></div>
				</form>
			</div>
		)
	}
}

export default Login
