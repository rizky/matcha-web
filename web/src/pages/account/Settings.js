import React, { Component } from 'react'

class Settings extends Component {
	render() {
		return (
			<div class="forms">
			<h1>Settings</h1>
			<form action='/account/settings' method='POST'>
				<h2>Personal</h2>
				<input type='text' name='name' placeholder='Name' value=''/>
				<hr />
				<input type='text' name='username' placeholder='Username' value=''/>
				<hr />
				<input type='email' name='email' placeholder='Email' value=''/>
				<hr />
				<br />
				<h2>Password</h2>
				<input type='password' name='password_old' placeholder='Old Password'/>
				<hr />
				<input type='password' name='password' placeholder='New Password'/>
				<hr />
				<input type='password' name='password2' placeholder='Retype New Password'/>
				<hr />
				<br />
				<button type='submit'>Update</button>
				<input type='hidden' name='id' value=''/>
			</form>
			</div>
		)
 	}
}

export default Settings
