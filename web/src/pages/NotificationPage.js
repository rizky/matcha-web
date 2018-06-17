import React, { Component } from 'react'
import { Notifications } from '../components'
import './NotificationPage.css'

class NotificationPage extends Component {
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
