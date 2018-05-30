var mysql=require('mysql');
var connection=mysql.createPool({
	host:'db',
	user:'root',
	password:'root',
	database:'matcha'
});

module.exports=connection;