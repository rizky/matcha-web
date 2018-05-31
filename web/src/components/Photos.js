import React, { Component } from 'react'
import { Photo } from '../components'
import './Photo.css'

export default class Photos extends Component {
	componentDidMount() {
		this.props.actions.loadPhotos()
	}

	render () {
		let photos = this.props.photos.map ( photo => {
			return (<Photo key={photo.id} photo={photo} actions={this.props.actions}/>)
		})
		return (
			<div className='photos'>{photos}</div>
		)
	}
}