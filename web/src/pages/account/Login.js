import React, { Component } from 'react'

class Login extends Component {
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
					<div>Don't have an account? <a href='/account/register'>Sign Up</a></div>
				</form>
			</div>
		)
	}
}

export default Login
