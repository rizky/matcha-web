import ORM from './ORM'
import User from './User'

export default class Photo extends ORM {
	static get (callback)
	{
		Photo.findAll((err, rows) =>
		{	
			var promises = rows.map(async (row) => {
				row['like_logo'] = 'far'
				row.user = await User.findOne(row.user)
				return row;
			})
			Promise.all(promises).then(results => {
				callback(err, rows)
			})
		})
	}
}