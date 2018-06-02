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
			var promises = threads.map(async (thread) => {
				return await this.populate(thread)
			})
			Promise.all(promises).then(results => {
				callback(err, threads)
			})
		})
	}
}