import ORM from './ORM'
import User from './User'

export default class Message extends ORM {
	static async populate(message)
	{
		message.from = await User.findOne(message.from)
	}

	static find(params, callback)
	{
		Message.findAll(params, null, (err, messages) =>
		{	
			var promises = messages.map(async (message) => {
				return await this.populate(message)
			})
			Promise.all(promises).then(results => {
				callback(err, messages)
			})
		})
	}
}