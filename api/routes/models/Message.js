import ORM from './ORM'

export default class Message extends ORM {
	static find(params, callback)
	{
		Message.findAll(params, (err, comments) =>
		{	
			var promises = comments.map(async (comment) => {
				return await this.populate(comment)
			})
			Promise.all(promises).then(results => {
				callback(err, comments)
			})
		})
	}
}