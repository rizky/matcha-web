import React, { Component } from 'react'
import './Notification.css'

class Notification extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			show: false
		}
	}

	render () {
		const { notification, onClick } = this.props
		const time = this.formatDate(new Date(Date.parse(notification.createdAt)))
		return (
			<div style={{display: 'grid', marginTop: '5px'}} onClick={onClick}>
				<div className='notification'>
					<span className='time_text'>{time}</span>
					{
						notification.match
						? <i className="fas fa-star"></i>
						: <i className="far fa-envelope"></i>
					}
					<div style={{position: 'relative'}}>
						<img className='profile_picture circled' src={notification.from.picture} alt=''/>
						{
						!notification.read
						? <i className="fas fa-circle" style={{position: 'absolute', top: '10px', right: '5px', padding: '0px', fontSize: '10px', color: '#fd3575'}}></i>
						: null
						}
					</div>
					<div>
					<span className='h1' style={{whiteSpace:'nowrap'}}>{notification.from.name}</span>
					{
						(notification.match)
						? <span style={{whiteSpace:'nowrap'}} > is your new Match!</span>
						: <span style={{whiteSpace:'nowrap'}} > sent you a message</span>
					}
					</div>
				</div>
				<div className='notification'>
				{
					(notification.match)
					? <div className='notification-box-empty'>
					  </div>
					: <div className='notification-box'>
						{notification.message}
					  </div>
				}
				</div>
				<hr style={{ margin: '0px 20px'}}/>
			</div>
		)
	}

	formatDate(date) {
		var monthNames = [
		  "January", "February", "March",
		  "April", "May", "June", "July",
		  "August", "September", "October",
		  "November", "December"
		];
		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();
	 
		var hour = date.getHours();
		var minute = date.getMinutes();
		if (Math.floor(Date.now - date / 86400) > 1)
			return `${day} ${monthNames[monthIndex]} ${year}, ${hour}:${minute}`;
		else
			return `${hour}:${minute}`;
	  }
}

export default Notification