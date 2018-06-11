import React, { Component } from 'react'
import './Message.css'
import { UserContext } from '../App';

class Message extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			show: false
		}
	}

	render () {
		const { message, userContext } = this.props
		const isYou = message.from.id === userContext.id ? {justifySelf: 'end'} : null
		const time = this.formatDate(new Date(Date.parse(message.createdAt)))
		return (
			<div style={{display: 'grid'}} id="message_{{message.id}}">
				<span className='time_text'>{time}</span>
				{
				message.match.data[0]
				? <div style={{textAlign: 'center', margin: '10px', marginBottom: '0px', width: '100%'}}>
					<hr style={{marginLeft: '-10px'}}/>
					<span style={{background: '#fff', position:'relative', top:'-19px', padding: '10px', color: '#b2b2b2'}}>Your are match</span>
				</div>
				: <div className='message' style={isYou}>
					{
						! isYou
						? <img className='profile_picture circled' src={message.from.picture} alt=''/>
						: null
					}
					<div className='message-box'>{message.message}</div>
				</div>
				}
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

export default React.forwardRef((props, ref) => (
	<UserContext.Consumer>
		{user => <Message {...props} userContext={user} ref={ref}/>}
	</UserContext.Consumer>
));