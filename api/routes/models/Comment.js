import ORM from './ORM'

export default class Comment extends ORM {
	static find(params, callback)
	{
		Comment.findAll(params, (err, comments) =>
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