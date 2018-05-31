import ORM from './ORM'
import User from './User'
import Comment from './Comment'

export default class Photo extends ORM {
	static async populate(photo)
	{
		photo['like_logo'] = 'far'
		photo.user = await User.findOne(photo.user)
	}

	static find(params, callback)
	{
		Photo.findAll(params, (err, photos) =>
		{	
			let promises = photos.map(async (photo) => {
				photo.comments = await Comment.findAll({photo: photo.id})
				photo.comments.map(async (comment) => {
					comment.user = await User.findOne(comment.user)
					return comment
				})
				return await this.populate(photo)
			})
			Promise.all(promises).then(results => {
				callback(err, photos)
			})
		})
	}

	static get(id, callback)
	{
		Photo.findOne(id, (err, photos) =>
		{	
			let promises = photos.map(async (photo) => {
				return await this.populate(photo)
			})
			Promise.all(promises).then(results => {
				callback(err, photos)
			})
		})
	}
}