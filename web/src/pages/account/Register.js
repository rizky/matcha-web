import React, { Component } from 'react'

class Register extends Component {
  	render() {
		return (
			<div class="forms">
				<h1>Registration</h1>
				<form action='/account/register' method='POST'>
					<input type='text' name='username' placeholder='Username' value='{{post.username}}'/>
					<hr/>
					<input type='password' name='password' placeholder='Password'/>
					<hr/>
					<input type='password' name='password2' placeholder='Retype Password'/>
					<hr/>
					<input type='email' name='email' placeholder='Email' value='{{post.email}}'/>
					<hr/>
					<input type='text' name='name' placeholder='Name' value='{{post.name}}'/>
					<hr/>
					<button type='submit'>Sign Up</button>
					<p>Have an account? <a href='/account/login'>Log in</a></p>
				</form>
			</div>
		)
 	}
}

export default Register
