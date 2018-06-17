import React, { Component } from 'react'
import './Photo.css'
import { dispatch } from '../index'
import * as PhotoActions from '../redux/actions/photo'
import { Comments } from '../components'
import { Link } from 'react-router-dom'

export default class Photo extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			show: false
		}
	}

	handleDelete = () => {
		const { photo: { id } } = this.props
		dispatch(PhotoActions.deletePhoto(id))
		this.handleClose()
	}

	render () {
		var { photo: { id, user, url, like_logo, comments, createdAt } } = this.props
		like_logo = (like_logo) ? like_logo : 'far'
		user = (user) ? user : 'far'
		let time_elapse = this.timeSince(Date.parse(createdAt))
		return (
			<div className='photo' id={`photo_${id}`}>
				<Link className='stackLayout' to={`/account/${user.username}`}>
					<div className='image-cropper' style={{ marginRight: '5px'}}>
						<img className='profile_picture' src={user.picture} alt=''/>
					</div>
					<span className='user'> {user.username}</span>
				</Link>
				<Link to={`/photos/${id}`}>
					<div><img className='picture' src={url} alt=''/></div>
				</Link>
				<div>
					<Link to={`/photos/like/${id}`}>
						<i className={`${like_logo} fa-heart`}></i>
					</Link>
					<i className='far fa-comment'></i>
				</div>
				{/* <span className='likes_v'>{photo.likes}</span> */}
				<Comments comments={comments}/>
				<div>
					<Link to='/photos/{id}'>	
						<span className='time_text'>{time_elapse}</span>
					</Link>
					<hr/>
				</div>
				<div>
					<input
						id={`comment_text_${id}`} placeholder='Add a comment...' className='comment_text'></input>
					<i className='fa fa-ellipsis-v' style={{ float: 'right' }} onClick={this.handleShow}></i>
				</div>
			</div>
		)
	}

	timeSince(date) {
		var seconds = Math.floor((new Date() - date) / 1000)
		var interval = Math.floor(seconds / 31536000)
		
		if (interval > 1) {
			return interval + " years ago"
		}
		interval = Math.floor(seconds / 2592000)
		if (interval > 1) {
			return interval + " months ago"
		}
		interval = Math.floor(seconds / 86400)
		if (interval > 1) {
			return interval + " days ago"
		}
		interval = Math.floor(seconds / 3600)
		if (interval > 1) {
			return interval + " hours ago"
		}
		interval = Math.floor(seconds / 60)
		if (interval > 1) {
			return interval + " minutes ago"
		}
		return Math.floor(seconds) + " seconds ago"
	}
}