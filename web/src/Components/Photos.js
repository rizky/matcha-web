import React, { Component } from 'react'
import { Photo } from '../Components'

export default class Photos extends Component {
	constructor() {
		super()
		this.state = {
			photos: []
		}
	}

	componentDidMount() {
		fetch (`http://localhost:3001/photos`)
			.then ( result => {
				return result.json()
			}).then( data => {
				let photos = data.map ( photo => {
					return (<Photo key={photo.id} photo={photo}/>)
				})
				this.setState({photos: photos})
			})
	}

	render () {
		return (
			<div>{this.state.photos}</div>
		)
	}
}