import db from '../../db/database'

export default class ORM {
	static findAll(callback)
	{
		return db.query(`select * from ${this.name.toLowerCase()} where deleted = false`, callback)
	}

	static findOne(id)
	{
		return new Promise (
			(resolve, reject) => {
				db.query(`select * from ${this.name.toLowerCase()} where deleted = false and id=?`, [id], (err, data) => {
					(err)
					? reject(err)
					: resolve(data[0])
				})
			}
		)
	}
}