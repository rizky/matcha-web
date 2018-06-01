import React, { Component } from 'react'
import { Thread } from '../components'
import './Threads.css'

export default class Threads extends Component {
	render () {
		let users = this.props.users.map ( user => {
			return (<Thread key={user.id} user={user}/>)
		})
		return (
			<div className='threads'>{users}</div>
		)
	}
}