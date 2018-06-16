import ORM from './ORM'
import User from './User'
import Message from './Message'

export default class Thread extends ORM {
	static async populate(thread)
	{
		thread.user2 = await User.findOne(thread.user2)
		thread.lastMessage = await Message.findAll({thread: thread.id}, ['createdAt', 'DESC'])
		thread.lastMessage = thread.lastMessage.length === 0 ? null : thread.lastMessage[0]
	}

	static find(params, callback)
	{
		Thread.findAll(params, null, (err, threads) =>
		{	
			threads = threads.filter((thread) => thread['matcher'] === thread['user2'] );
			var promises = threads.map(async (thread) => {
				return await this.populate(thread)
			})
			Promise.all(promises).then(results => {
				callback(err, threads)
			})
		})
	}

	static async match(params)
	{
		var threads = await Thread.findAll({ user1: params['user2'], user2: params['user1'] }, null)
		params['matcher'] = params['user1']
		console.log(params)
		if (threads.length == 0)
			return new Promise (
				(resolve, reject) => {
					Thread.insert(params, (err, data) => {
						if (err)
							reject(err)
						else
							resolve(params)
					})
				}
			)
		else
		return new Promise (
			(resolve, reject) => {
				var thread = threads[0]
				thread['matcher'] = thread['user2']
				Thread.update(thread, (err, data) => {
					if (err)
						reject(err)
					else
					{
						let message = {
							thread: thread.id,
							from: thread.user2,
							to: thread.user1,
							match: true,
							message: 'Match'
						}
						Message.insert(message)
						message = {
							thread: thread.id,
							from: thread.user1,
							to: thread.user2,
							match: true,
							message: 'Match'
						}
						Message.insert(message)
						resolve(thread)
					}
				})
			}
		)
	}
}