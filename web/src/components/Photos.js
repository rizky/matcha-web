import React, { Component } from 'react'
import { Photo } from '../components'
import './Photo.css'

export default class Photos extends Component {
	// componentDidMount() {
	// 	fetch (`http://localhost:81/photos`)
	// 		.then ( result => {
	// 			return result.json()
	// 		}).then( data => {
	// 			this.setState({photos: data})
	// 		})
	// }

	render () {
		let photos = this.props.photos.map ( photo => {
			return (<Photo key={photo.id} photo={photo}/>)
		})
		return (
			<div className='photos'>{photos}</div>
		)
	}
}