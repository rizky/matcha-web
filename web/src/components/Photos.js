import React, { Component } from 'react'
import { Photo } from '../components'
import './Photo.css'

export default class Photos extends Component {
	componentDidMount() {
		fetch (`http://localhost:81/photos`)
			.then ( result => {
				return result.json()
			}).then( photos => {
				this.props.actions.loadPhotos(photos);
			})
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