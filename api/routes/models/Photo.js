import ORM from './ORM'
import User from './User'
import Comment from './Comment'

export default class Photo extends ORM {
	static async populate(photo)
	{
		photo['like_logo'] = 'far'
		photo.user = await User.findOne(photo.user)
		photo.comment = await Comment.findAll({photo: photo.id})
		return photo;
	}

	static find(callback)
	{
		Photo.findAll(null, (err, photos) =>
		{	
			var promises = photos.map(async (photo) => {
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
			var promises = photos.map(async (photo) => {
				return await this.populate(photo)
			})
			Promise.all(promises).then(results => {
				callback(err, photos)
			})
		})
	}
}