import React, { Component } from 'react'
import { UserContext } from '../../App'

class Settings extends Component {
	render() {
		const { userContext } = this.props
		return (
			<div class='forms'>
			<h1>Settings</h1>
			<form action='/account/settings' method='POST'>
				<h2>Personal</h2>
				<input type='text' name='name' placeholder='Name' value={userContext.name}/>
				<hr />
				<input type='text' name='username' placeholder='Username' value={userContext.username}/>
				<hr />
				<input type='email' name='email' placeholder='Email' value={userContext.email}/>
				<hr />
				<input type='text' name='location' placeholder='Location' value={userContext.location}/>
				<hr />
				<input type='text' placeholder='Gender' disabled value=''/>
				<div style={{display: 'flex'}}>
					<input type='radio' style={{width: '1em', height: '1em'}} name='gender-male'/>
					<label for='gender'>Male</label>
					<input type='radio' style={{width: '1em', height: '1em'}} name='gender-female'/>
					<label for='gender'>Female</label>
				</div>
				<hr />
				<br />
				<h2>Preferences</h2>
				<input type='text' placeholder='Gender' disabled value=''/>
				<div style={{display: 'flex'}}>
					<input type='checkbox' style={{width: '1em', height: '1em'}} name='pGender-male'/>
					<label for='pGender'>Male</label>
					<input type='checkbox' style={{width: '1em', height: '1em'}} name='pGender-female'/>
					<label for='pGender'>Female</label>
				</div>
				<hr />
				<input type='text' placeholder='Age' disabled value=''/>
				<input type='range' min='18' max='100' value='20' name='age'/>
				<hr />
				<input type='text' placeholder='Distance' disabled value=''/>
				<input type='range' min='1' max='20' value='5' name='distance' />
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

export default React.forwardRef((props, ref) => (
	<UserContext.Consumer>
		{user => <Settings {...props} userContext={user} ref={ref}/>}
	</UserContext.Consumer>
));
