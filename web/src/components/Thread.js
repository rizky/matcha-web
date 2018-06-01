import React, { Component } from 'react'
import './Threads.css'

export default class Thread extends Component {
	render () {
		let user = this.props.user
		return (
			<div className='thread' id={`user_${user.id}`} onClick={this.props.onClick}>
				<img className='profile_picture circled' src={user.picture} alt=''/>
				<div className='thread_preview'>
					<span className='h1'>{user.name} </span>
					<span className='h2'>Sent you giphy</span>
				</div>
			</div>
		)
	}
}