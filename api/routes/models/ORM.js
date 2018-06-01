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
			return db.query(query, [id], callback)
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

	static insert(params, callback = null)
	{
		let table = this.name.toLowerCase()
		let values = []
		let columns = ''
		let slots = []
		if (params !== null)
			Object.keys(params).forEach((param, index) => {
				if (index !== 0)
				{
					columns += ', '
					slots += ', '
				}
				columns += `${table}.${param}`
				slots += `?`
				values.push(params[param])
			})

		let query = `insert into ${table} (${columns}) values (${slots})`
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

	static truncate(id, callback = null)
	{
		let query = `truncate ${this.name.toLowerCase()}`

		if (callback)
			return db.query(query, callback)
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