import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Registration extends Component {
  	render() {
		return (
			<div class="forms">
				<h1>Registration</h1>
				<form action='/account/registration' method='POST'>
					<input type='text' name='username' placeholder='Username' value=''/>
					<hr/>
					<input type='password' name='password' placeholder='Password'/>
					<hr/>
					<input type='password' name='password2' placeholder='Retype Password'/>
					<hr/>
					<input type='email' name='email' placeholder='Email' value=''/>
					<hr/>
					<input type='text' name='name' placeholder='Name' value=''/>
					<hr/>
					<button type='submit'>Sign Up</button>
					<p>Have an account? <Link to='/account/login'>Log in</Link></p>
				</form>
			</div>
		)
 	}
}

export default Registration
