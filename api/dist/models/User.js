'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _database = require('../db/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var table = 'user';

var User = {
	getAllUsers: function getAllUsers(callback) {
		return _database2.default.query('Select * from ' + table, callback);
	},

	getUserById: function getUserById(id, callback) {
		return _database2.default.query("select * from user where Id=?", [id], callback);
	},

	addUser: function addUser(User, callback) {
		console.log("inside service");
		console.log(User.Id);
		return _database2.default.query("Insert into user values(?,?,?)", [User.Id, User.Username, User.Name], callback);
	},

	deleteUser: function deleteUser(id, callback) {
		return _database2.default.query("delete from user where Id=?", [id], callback);
	},

	updateUser: function updateUser(id, User, callback) {
		return _database2.default.query("update user set Title=?,Status=? where Id=?", [User.Username, User.Name, id], callback);
	},

	deleteAll: function deleteAll(item, callback) {
		var delete_array = [];
		for (i = 0; i < item.length; i++) {
			delete_array[i] = item[i].Id;
		}return _database2.default.query("delete from user where Id in (?)", [delete_array], callback);
	}
};

exports.default = User;