import db from '../../db/database'

export default class ORM {
	static findAll(params, callback = null)
	{
		let query = `select * from ${this.name.toLowerCase()} where deleted = false`
		let values = []
		if (params !== null)
			Object.keys(params).forEach((param) => {
				query += ` and ${param} = ?`
				values.push(params[param])
			})
		if (callback)
			return db.query(query, values, callback)
		return new Promise (
			(resolve, reject) => {
				db.query(query, values,(err, data) => {
					(err)
					? reject(err)
					: resolve(data)
				})
			}
		)
	}

	static findOne(id, callback = null)
	{
		let query = `select * from ${this.name.toLowerCase()} where deleted = false and id=?`

		if (callback)
			return db.query(`select * from ${this.name.toLowerCase()} where deleted = false and id=?`, [id], callback)
		return new Promise (
			(resolve, reject) => {
				db.query(query, [id], (err, data) => {
					(err)
					? reject(err)
					: resolve(data[0])
				})
			}
		)
	}
}