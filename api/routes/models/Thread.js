import ORM from './ORM'
import User from './User'

export default class Thread extends ORM {
	static async populate(thread)
	{
		thread.user2 = await User.findOne(thread.user2)
	}

	static find(params, callback)
	{
		Thread.findAll(params, (err, threads) =>
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