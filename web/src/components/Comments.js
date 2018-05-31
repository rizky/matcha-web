import React, { Component } from 'react'
import { Comment } from '../components'
import './Photo.css'

export default class Comments extends Component {
	render () {
		console.log(this.props.comments);
		let comments = this.props.comments.map ( comment => {
			return (<Comment key={comment.id} comment={comment}/>)
		})
		return (
			<div className='comments'>{comments}</div>
		)
	}
}