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
		const {message, userContext} = this.props
		const isYou = message.from.id === userContext.id ? {justifySelf: 'end'} : null
		return (
			<div className='message' style={isYou} id="message_{{message.id}}">
				{
					! isYou
					? <img className='profile_picture circled' src={message.from.picture} alt=''/>
					: null
				}
				<span style={{width: '96%'}}>{message.message}</span>
			</div>
		)
	}
}

export default React.forwardRef((props, ref) => (
	<UserContext.Consumer>
		{user => <Message {...props} userContext={user} ref={ref}/>}
	</UserContext.Consumer>
));