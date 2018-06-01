import React, { Component } from 'react'
import './Threads.css'

export default class Thread extends Component {
	render () {
		let user = this.props.user
		return (
			<div className='thread' id={`user_${user.id}`}>
				<a href={`/users/${user.id}`}>
					<div><img className='profile_picture circled' src={user.picture} alt=''/></div>
				</a>
				<div className='thread_preview'>
					<span className='h1'>{user.name} </span>
					<span className='h2'>Sent you giphy</span>
				</div>
			</div>
		)
	}
}