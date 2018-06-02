import React, { Component } from 'react'
import { Notification } from '../components'
import './Notification.css'

export default class Notifications extends Component {
	render () {
		if (this.props.notifications == null)
			return (<div></div>)
		let notifications = this.props.notifications.map ( notification => {
			return <Notification key={notification.id} notification={notification}/>
		})
		return <div className='notifications'>{notifications}</div>
	}
}