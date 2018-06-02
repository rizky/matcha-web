import React, { Component } from 'react'
import './Photo.css'
import { Link } from 'react-router-dom'

export default class Comment extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			show: false
		}
	}

	render () {
		let comment = this.props.comment
		return (
			<div className="comment" id="comment_{{comment.id}}">
				<Link to="/account/{{comment.user}}">
					<span className="user">{comment.user.username} </span>
				</Link>
				<span style={{width: '96%'}}>{comment.message}</span>
				<div
					className="{{comment.delete_v}}" style={{float: 'right', opacity: '0.3'}}>
					<i className="fa fa-times"></i>
				</div>
			</div>
		)
	}
}