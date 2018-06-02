import React, { Component } from 'react'
import { dispatch } from '../../index'
import * as UserActions from '../../redux/actions/user'
import { Link } from 'react-router-dom'

class Login extends Component {
	componentDidMount() {
		let user = { id: 1, username: 'admin' }
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
					<Link to='/account/recover'>Forgot password?</Link>
					<div>Don't have an account? <Link to='/account/registration'>Sign Up</Link></div>
				</form>
			</div>
		)
	}
}

export default Login
