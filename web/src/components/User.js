import React, { Component } from 'react'
import './Photo.css'

export default class User extends Component {
	render () {
		if (!this.props.user)
			return null
		var lat = 46.529
		var long = 6.5
		let user = this.props.user
		let age = this.calculateAge(Date.parse(user.dob))
		let activeAt = this.timeSince(Date.parse(user.activeAt))
		let distance = this.getDistanceFromLatLonInKm(user.lat, user.long, lat, long)
		return (
			<div className='photo' id={`user_${user.id}`}>
				<img className='picture' src={user.picture} alt=''/>
				<div>
					<a>
						<span className='user'>{user.name}, </span>
						<span>{age}</span>
					</a>
					<i className='fa fa-ellipsis-v' style={{ float: 'right' }} onClick={this.handleShow}></i>
				</div>
				<div>
					<span className='time_text'>{distance} kilometer away, </span>
					<span className='time_text'> active {activeAt}</span>
				</div>
			</div>
		)
	}

	calculateAge(date) {
		var seconds = Math.floor((new Date() - date) / 1000)
		var interval = Math.floor(seconds / 31536000)
		return interval;
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

	getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
		var R = 6371; // Radius of the earth in km
		var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
		var dLon = this.deg2rad(lon2-lon1); 
		var a = 
			Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
			Math.sin(dLon/2) * Math.sin(dLon/2)
			; 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
		return Math.ceil(d)
	}
	
	deg2rad(deg) {
		return deg * (Math.PI/180)
	}
}