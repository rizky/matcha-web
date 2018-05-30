import db from '../db/database'

var table = 'user'

var User = {
	getAllUsers: (callback) => {
		return db.query(`Select * from ${table}`, callback)
	},

	getUserById: (id,callback) => {
		return db.query(`select * from ${table} where Id=?`, [id], callback)
	},

	addUser: (User,callback) => {
		console.log("inside service")
		console.log(User.Id)
		return db.query(`Insert into ${table} values(?,?,?)`, [User.Id, User.Username, User.Name],  callback)
	},

	deleteUser: (id,callback) => {
		return db.query(`delete from ${table} where Id=?`, [id], callback)
	},

	updateUser: (id,User,callback) => {
		return  db.query(`update ${table} set Title=?,Status=? where Id=?`, [User.Username, User.Name,id], callback)
	},

	deleteAll: (item,callback) => {
		var delete_array=[]
		for(i=0; i < item.length ; i++)
			delete_array[i] = item[i].Id
		return db.query(`delete from ${table} where Id in (?)`, [delete_array], callback)
	}
}

export default User