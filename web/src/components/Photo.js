import React, { Component } from 'react'
import './Photo.css'

export default class Photo extends Component {
	render () {
		var photo = this.props.photo
		photo.like_logo = (photo.like_logo) ? photo.like_logo : 'far'
		return (
			<div className='photo' id={`photo_${photo.id}`}>
				<a href={`/account/${photo.user_username}`}>
					<i className='fas fa-user-circle'></i>
					<span className='user'>{photo.user.username}</span>
				</a>
				<a href='/photos/{photo.id}'>
					<div><img src={photo.url} alt=''/></div>
				</a>
				<div>
					<a href='/photos/like/{photo.id}'>
						<i className={`${photo.like_logo} fa-heart`}></i>
					</a>
					<i className='far fa-comment'></i>
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
						id={`comment_text_${photo.id}`} placeholder='Add a comment...' className='comment_text'></input>
					<i className='fa fa-ellipsis-v' style={{ float: 'right' }}></i>
				</div>
			</div>
		)
	}
}