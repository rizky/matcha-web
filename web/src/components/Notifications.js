import React, { Component } from 'react'
import { Notification } from '../components'
import './Notification.css'
import { dispatch } from '../index'
import * as ThreadActions from '../redux/actions/thread'
import { withRouter } from 'react-router'

class Notifications extends Component {
	selectThread = (thread) => {
		let { history } = this.props
		dispatch(ThreadActions.selectThread(thread))
		history.push('/messages')
	}

	render () {
		let { notifications } = this.props
		if (notifications == null) return <div/>
		notifications = notifications.map ( notification => 
			<Notification key={notification.id} notification={notification} onClick={() => this.selectThread(notification.thread)}/>
		)
		return <div className='notifications'>{notifications}</div>
	}
}

export default Notifications = withRouter(Notifications)