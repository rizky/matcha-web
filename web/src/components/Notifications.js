import React, { Component } from 'react'
import { Notification } from '../components'
import './Notification.css'
import { dispatch } from '../index'
import * as ThreadActions from '../redux/actions/thread'
import * as MessageActions from '../redux/actions/message'
import { withRouter } from 'react-router'

class Notifications extends Component {
	selectThread = (thread) => {
		dispatch(ThreadActions.selectThread(thread))
		dispatch(MessageActions.loadMessages(thread.id))
		this.props.history.push('/messages')
	}

	render () {
		if (this.props.notifications == null)
			return (<div></div>)
		let notifications = this.props.notifications.map ( notification => {
			return <Notification key={notification.id} notification={notification} onClick={() => this.selectThread(notification.thread)}/>
		})
		return <div className='notifications'>{notifications}</div>
	}
}

export default Notifications = withRouter(Notifications)