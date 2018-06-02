import React, { Component } from 'react'
import { Notifications } from '../components'
import { dispatch } from '../index'
import * as NotificationActions from '../redux/actions/notification'
import './NotificationPage.css'

class NotificationPage extends Component {
	componentDidMount() {
		if (this.props.userContext)
			dispatch(NotificationActions.loadNotifications(this.props.userContext.id))
	}

	render() {		
		const { notifications } = this.props
		return (
			<div className='notification-page'>
				<Notifications notifications={notifications}/>
			</div>
		)
	}
}

export default NotificationPage
