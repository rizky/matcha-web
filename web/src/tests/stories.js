import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Footer, Nav, Photo } from '../components/'
import { Login } from '../pages'
import '../../public/css/main.css'

storiesOf('Footer', module)
	.add('normal', () => (
		<Footer />
	))

storiesOf('Nav', module)
	.add('normal', () => (
		<Nav />
	))

storiesOf('Photo', module)
	.add('normal', () => {
		var photo = {
			like_logo: 'far',
			user: {
				username: 'Rizky Ario',
				picture: 'https://user-images.githubusercontent.com/6814254/40845839-253ad5f4-65b8-11e8-9ef5-19f4d79f153f.jpg'
			},
			url: 'https://user-images.githubusercontent.com/6814254/40547074-32f1a132-6031-11e8-9bbd-e8f9f389bca2.png'
		}
		return (
			<Photo photo={photo} />
		)
	})