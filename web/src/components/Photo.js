import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
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
		const wellStyles = { maxWidth: 400, margin: '0 auto' }

		var photo = this.props.photo
		photo.like_logo = (photo.like_logo) ? photo.like_logo : 'far'
		photo.user = (photo.user) ? photo.user : 'far'
		return (
			<div className='photo' id={`photo_${photo.id}`}>
				<a href={`/account/${photo.user.username}`}>
					<i className='fas fa-user-circle'></i>
					<span className='user'>{photo.user.username}</span>
				</a>
				<a href={`/photos/${photo.id}`}>
					<div><img src={photo.url} alt=''/></div>
				</a>
				<div>
					<a href={`/photos/like/${photo.id}`}>
						<i className={`${photo.like_logo} fa-heart`}></i>
					</a>
					<i className='far fa-comment'></i>
				</div>
				<span className='likes_v'>{photo.likes}</span>
				<Comments comments={photo.comments}/>
				<div>
					<a href='/photos/{photo.id}'>	
						<span className='time_text'>{photo.time_elapse}</span>
					</a>
					<hr/>
				</div>
				<div>
					<input
						id={`comment_text_${photo.id}`} placeholder='Add a comment...' className='comment_text'></input>
					<i className='fa fa-ellipsis-v' style={{ float: 'right' }} onClick={this.handleShow}></i>
				</div>
				<Modal show={this.state.show} onHide={this.handleClose} bsSize="small">				
					<div className="well" style={wellStyles}>
					<Button onClick={this.handleDelete} bsStyle="danger" block>Delete</Button>
					<Button onClick={this.handleClose} block>Share to Twitter</Button>
					<Button onClick={this.handleClose} block>Cancel</Button>
					</div>
				</Modal>	
			</div>
		)
	}
}