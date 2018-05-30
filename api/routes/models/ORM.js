import db from '../../db/database'

export default class ORM {
	static findAll (callback)
	{
		return db.query(`select * from ${this.name.toLowerCase()} where deleted = false`, callback)
	}

	static findOne (id, callback)
	{
		return db.query(`select * from ${this.name.toLowerCase()} where deleted = false and id=?`, [id], callback)
	}
}