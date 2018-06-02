import ORM from './ORM'
import User from './User'

export default class Message extends ORM {
	static async populate(message)
	{
		message.from = await User.findOne(message.from)
	}

	static find(params, order, callback)
	{
		Message.findAll(params, order, (err, messages) =>
		{	
			if (err)
				callback(err, messages)
			var promises = messages.map(async (message) => {
				return await this.populate(message)
			})
			Promise.all(promises).then(results => {
				callback(err, messages)
			})
		})
	}
}