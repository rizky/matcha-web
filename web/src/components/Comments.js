import React, { Component } from 'react'
import { Comment } from '../components'
import './Photo.css'

export default class Comments extends Component {
	render () {
		let comments = this.props.comments.map ( comment => {
			return <Comment key={comment.id} comment={comment}/>
		})
		if (comments.length > 0)
			return <div className='comments'>{comments}</div>
		else
			return null;
	}
}