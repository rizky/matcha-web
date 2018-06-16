import ORM from './ORM'
import Thread from './Thread';

export default class User extends ORM {
    static async populate(user)
	{
        var threads = await Thread.findAll({ user1:user.id })
        threads = [ ...threads, await Thread.findAll({ user2:user.id })]
		user['threads'] = threads
	}

	static find(params, order, callback)
	{
		User.findAll(params, order, (err, users) =>
		{	
			if (err)
				callback(err, users)
			var promises = users.map(async (user) => {
				return await this.populate(user)
			})
			Promise.all(promises).then(results => {
				callback(err, users)
			})
		})
	}

}