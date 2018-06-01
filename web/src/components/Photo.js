import React, { Component } from 'react'
import './Photo.css'
import { dispatch } from '../index'
import * as PhotoActions from '../redux/actions/photo'
import { Comments } from '../components'

export default class Photo extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			show: false
		}
	}

	handleDelete = () => {
		dispatch(PhotoActions.deletePhoto(this.props.photo.id))
		this.handleClose()
	}

	handleClose = () => {
		this.setState({ show: false })
	}

	handleShow = () => {
		this.setState({ show: true })
	}

	render () {
		var photo = this.props.photo
		photo.like_logo = (photo.like_logo) ? photo.like_logo : 'far'
		photo.user = (photo.user) ? photo.user : 'far'
		let time_elapse = this.timeSince(Date.parse(photo.createdAt))
		return (
			<div className='photo' id={`photo_${photo.id}`}>
				<a className='stackLayout' href={`/account/${photo.user.username}`}>
					<div className='image-cropper' style={{ marginRight: '5px'}}>
						<img className='profile_picture' src={photo.user.picture} alt=''/>
					</div>
					<span className='user'> {photo.user.username}</span>
				</a>
				<a href={`/photos/${photo.id}`}>
					<div><img className='picture' src={photo.url} alt=''/></div>
				</a>
				<div>
					<a href={`/photos/like/${photo.id}`}>
						<i className={`${photo.like_logo} fa-heart`}></i>
					</a>
					<i className='far fa-comment'></i>
				</div>
				{/* <span className='likes_v'>{photo.likes}</span> */}
				<Comments comments={photo.comments}/>
				<div>
					<a href='/photos/{photo.id}'>	
						<span className='time_text'>{time_elapse}</span>
					</a>
					<hr/>
				</div>
				<div>
					<input
						id={`comment_text_${photo.id}`} placeholder='Add a comment...' className='comment_text'></input>
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