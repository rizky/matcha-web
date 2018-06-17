import React, { Component } from 'react'
import { Photo } from '../components'
import './Photo.css'
import { dispatch } from '../index'
import * as PhotoActions from '../redux/actions/photo'

export default class Photos extends Component {
	componentDidMount() {
		dispatch(PhotoActions.loadPhotos())
	}

	render () {
		let { photos } = this.props
		if (!photos) return null
		photos = photos.map ( photo => <Photo key={photo.id} photo={photo}/> )
		return <div className='photos'>{photos}</div>
	}
}