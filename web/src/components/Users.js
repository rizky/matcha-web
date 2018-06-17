import React, { Component } from 'react'
import { User } from '../components'
import './Photo.css'
import { dispatch } from '../index'
import * as UserActions from '../redux/actions/user'
import { UserContext } from '../App';

class Users extends Component {
	componentDidMount() {
		const { userContext } = this.props
		dispatch(UserActions.loadUsers(userContext.id))
	}

	render () {
		var { users } = this.props
		if (!users) return null
		users = users.map ( user => {return (<User key={user.id} user={user}/>)})
		return (
			<div className='photos'>{users}</div>
		)
	}
}

export default React.forwardRef((props, ref) => (
	<UserContext.Consumer>
		{user => <Users {...props} userContext={user} ref={ref}/>}
	</UserContext.Consumer>
));