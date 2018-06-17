import ORM from './ORM'
import Thread from './Thread';

export default class User extends ORM {
    static async populate(user, to)
	{
		var threads = await Thread.findAll({ user1:user.id, user2:to })
		if (threads.length === 0)
			threads = await Thread.findAll({ user1:to, user2:user.id })
		if (threads.length > 0)
		{
			user['thread'] = threads[0]
			if (user.thread.user2 === user.thread.matcher)
				user['match'] = true
			else
				user['match'] = false
		}
	}

	static find(params, order, callback)
	{
		User.findAll(null, order, (err, users) =>
		{	
			if (err) callback(err, users)			
			users = users.filter(user => user.id !== Number.parseInt(params.to));
			var promises = users.map(async (user) => {
				return await this.populate(user, params.to)
			})
			Promise.all(promises).then(results => {
				callback(err, users)
			})
		})
	}

}