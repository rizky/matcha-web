import express from 'express'
import { User, Photo, Message, Thread } from '../models'
import moment from 'moment'

var router = express.Router()

router.get('/', async (req, res, next) =>
{
	await User.truncate()
	await Thread.truncate()
	await Message.truncate()

	let user = {
		username: "admin",
		name: "Virgil Sawyer",
		password: "3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		email: "sawyer@gmail.com",
		picture: "/img/profiles/no-pic.jpg",
		dob: "1989-05-30",
		lat: 46.528999,
		long: 6.5
	}
	await User.insert(user)
	user = {
		username: "esparrow",
		name: "Elliot Sparrow",
		password: "3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		email: "esparrow@gmail.com",
		picture: "/img/profiles/no-pic.jpg",
		dob: "1990-05-30",
		lat: 46.52899,
		long: 6.562
	}
	await User.insert(user)
	user = {
		username: "bjerry",
		name: "Buck Jerry",
		password: "3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		email: "bjerry@gmail.com",
		picture: "/img/profiles/no-pic.jpg",
		dob: "1994-05-30",
		lat: 46.528,
		long: 6.5626
	}
	await User.insert(user)
	user = {
		username: "eruss",
		name: "Eustace Russ",
		password: "3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		email: "eruss@gmail.com",
		picture: "/img/profiles/no-pic.jpg",
		dob: "1994-05-30",
		lat: 46.528,
		long: 6.5626
	}
	await User.insert(user)
	user = {
		username: "cmartin",
		name: "Connor Martin",
		password: "3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		email: "cmartin@gmail.com",
		picture: "/img/profiles/no-pic.jpg",
		dob: "1992-05-30",
		lat: 46.528,
		long: 6.5626
	}
	await User.insert(user)
	user = {
		username: "kherb",
		name: "Kristopher Herb",
		password: "3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		email: "kherb@gmail.com",
		picture: "/img/profiles/no-pic.jpg",
		dob: "1995-05-30",
		lat: 46.528,
		long: 6.5626
	}
	await User.insert(user)
	user = {
		username: "sedgar",
		name: "Stacy Edgar",
		password: "3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		email: "sedgar@gmail.com",
		picture: "/img/profiles/no-pic.jpg",
		dob: "1995-05-30",
		lat: 46.528,
		long: 6.5626
	}
	await User.insert(user)
	user = {
		username: "brian",
		name: "Bazza Rian",
		password: "3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		email: "brian@gmail.com",
		picture: "/img/profiles/no-pic.jpg",
		dob: "1995-05-30",
		lat: 46.528,
		long: 6.5626
	}
	await User.insert(user)
	user = {
		username: "jisiah",
		name: "Jerald Isiah",
		password: "3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		email: "jisiah@gmail.com",
		picture: "/img/profiles/no-pic.jpg",
		dob: "1995-05-30",
		lat: 46.528,
		long: 6.5626
	}
	await User.insert(user)

	// Insert Match and Message

	let thread = { createdAt: moment(Date.now()).subtract(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'), user1: 1, user2: 2 }
	thread = await Thread.match(thread)
	thread = { createdAt: moment(Date.now()).subtract(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'), user1: 2, user2: 1 }
	thread = await Thread.match(thread)
	
	let message = {
		thread: thread.id,
		from: thread.user1,
		to: thread.user2,
		message: `Hello`,
		createdAt: moment(Date.now()).subtract(2, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}
	await Message.insert(message)

	message = {
		thread: thread.id,
		from: thread.user2,
		to: thread.user1,
		message: 'Hi There',
		createdAt: moment(Date.now()).subtract(1, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}
	await Message.insert(message)

	thread = { createdAt: moment(Date.now()).subtract(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'), user1: 1, user2: 3 }
	thread = await Thread.match(thread)
	thread = { createdAt: moment(Date.now()).subtract(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'), user1: 3, user2: 1 }
	thread = await Thread.match(thread)

	message = {
		thread: thread.id,
		from: thread.user1,
		to: thread.user2,
		message: `Hello`,
		createdAt: moment(Date.now()).subtract(4, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}
	await Message.insert(message)

	message = {
		thread: thread.id,
		from: thread.user2,
		to: thread.user1,
		message: 'Hello! How are you',
		createdAt: moment(Date.now()).subtract(3, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}
	await Message.insert(message)

	thread = { createdAt: moment(Date.now()).subtract(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'), user1: 1, user2: 4 }
	thread = await Thread.match(thread)
	thread = { createdAt: moment(Date.now()).subtract(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'), user1: 4, user2: 1 }
	thread = await Thread.match(thread)

	message = {
		thread: thread.id,
		from: thread.user1,
		to: thread.user2,
		message: `Hello`,
		createdAt: moment(Date.now()).subtract(6, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}
	await Message.insert(message)

	message = {
		thread: thread.id,
		from: thread.user2,
		to: thread.user1,
		message: 'Hi! Nice to meet you',
		createdAt: moment(Date.now()).subtract(5, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}
	await Message.insert(message)

	thread = { createdAt: moment(Date.now()).subtract(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'), user1: 1, user2: 5 }
	thread = await Thread.match(thread)
	thread = { createdAt: moment(Date.now()).subtract(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'), user1: 5, user2: 1 }
	thread = await Thread.match(thread)
	
	message = {
		thread: thread.id,
		from: thread.user1,
		to: thread.user2,
		message: `Hello`,
		createdAt: moment(Date.now()).subtract(8, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}
	await Message.insert(message)

	message = {
		thread: thread.id,
		from: thread.user2,
		to: thread.user1,
		message: 'Bonjour!',
		createdAt: moment(Date.now()).subtract(7, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}
	await Message.insert(message)

	thread = { user1: 6, user2: 1 }
	thread = await Thread.match(thread)
	thread = { user1: 1, user2: 7 }
	thread = await Thread.match(thread)
	thread = { user1: 7, user2: 1 }
	thread = await Thread.match(thread)
	thread = { user1: 1, user2: 8 }
	thread = await Thread.match(thread)
	thread = { user1: 8, user2: 1 }
	thread = await Thread.match(thread)
	thread = { user1: 1, user2: 9 }
	thread = await Thread.match(thread)
	thread = { user1: 9, user2: 1 }
	thread = await Thread.match(thread)

	res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Done\n'); 
})

export default router