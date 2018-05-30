import React, { Component } from 'react'
import './Photo.css'

export default class Photo extends Component {
	render () {
		var photo = this.props.photo
		return (
			<div className='photo' id={`photo_${photo.id}`}>
				<a href='/account/{photo.user_username}'>
					<i class='fas fa-user-circle'></i>
					<span class='user'>{photo.user_username}</span>
				</a>
				<a href='/photos/{photo.id}'>
					<div><img src={photo.url} alt=''/></div>
				</a>
				<div>
					<a href='/photos/like/{photo.id}'>
						<i class='{photo.like_logo} fa-heart'></i>
					</a>
					<i class='far fa-comment'></i>
				</div>
				<span className='likes_v'>{photo.likes}</span>
				<div>
					<a href='/photos/{photo.id}'>	
						<span className='time_text'>{photo.time_elapse}</span>
					</a>
					<hr/>
				</div>
				<div>
					<input
						id='comment_text_{photo.id}' placeholder='Add a comment...' className='comment_text'></input>
					<i class='fa fa-ellipsis-v' style={{ float: 'right' }}></i>
				</div>
			</div>
		)
	}
}