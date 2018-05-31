import React, { Component } from 'react'

export default class Thread extends Component {
	render () {
		let user = this.props.user
		return (
			<div className='photo' id={`user_${user.id}`}>
				<a href={`/users/${user.id}`}>
					<div><img className='picture' src={user.picture} alt=''/></div>
				</a>
				<div>
					<a href={`/account/${user.username}`}>
						<span className='user'>{user.name}, </span>
					</a>
					<i className='fa fa-ellipsis-v' style={{ float: 'right' }} onClick={this.handleShow}></i>
				</div>
			</div>
		)
	}
}