import db from '../../db/database'

export default class ORM {
	static findAll(params, order = null, callback = null)
	{
		let table = this.name.toLowerCase()
		let query = `SELECT * FROM ${table} WHERE deleted = false`
		let values = []
		if (params !== null)
			Object.keys(params).forEach((param) => {
				query += ` and ${table}.${param} = ?`
				values.push(params[param])
			})
		if (order)
			query += ` ORDER BY ${order[0]} ${order[1]}`
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
		let query = `SELECT * FROM ${this.name.toLowerCase()} WHERE deleted = false AND id=?`

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

		let query = `INSERT INTO ${table} (${columns}) VALUES (${slots})`
		if (callback)
			return db.query(query, values, callback)
		return new Promise (
			(resolve, reject) => {
				db.query(query, values,(err, data) => {
					if (err)
						reject(err)
					else
					{
						params['id'] = data.insertId
						resolve(params)
					}
				})
			}
		)
	}

	static update(params, callback = null)
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
				if (params[param] != 'deleted' && params[param] != 'id')
				{
					columns += `${table}.${param}`
					slots += `?`
					values.push(params[param])
				}
			})

		let query = `UPDATE ${table} (${columns}) SET (${slots}) WHERE deleted = false AND id=?`
		if (callback)
			return db.query(query, values, callback)
		return new Promise (
			(resolve, reject) => {
				db.query(query, values,(err, data) => {
					if (err)
						reject(err)
					else
					{
						params['id'] = data.insertId
						resolve(params)
					}
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