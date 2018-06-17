import React, { Component } from 'react'
import { Notifications } from '../components'
import { dispatch } from '../index'
import * as NotificationActions from '../redux/actions/notification'
import './NotificationPage.css'

class NotificationPage extends Component {
	componentDidMount() {
		const { userContext } = this.props
		if (userContext) dispatch(NotificationActions.loadNotifications(userContext.id))
	}

	render() {		
		const { notifications, userContext } = this.props
		return (
			<div className='notification-page'>
				<Notifications notifications={notifications} userContext={userContext}/>
			</div>
		)
	}
}

export default NotificationPage
