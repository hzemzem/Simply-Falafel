var password = require("./../passwords.js");
console.log(password);
var path = require('path');
module.exports = 
	{
	  "development": {
	    "username": "root",
	    "password": "password",
	    "database": "simply_falafel_db",
	    "host": "127.0.0.1",
	    "dialect": "mysql"
	  },
	  "test": {
	    "username": "root",
	    "password": null,
	    "database": "database_test",
	    "host": "127.0.0.1",
	    "dialect": "mysql"
	  },
	  "production": {
	    "username": "root",
	    "password": null,
	    "database": "database_production",
	    "host": "127.0.0.1",
	    "dialect": "mysql"
	  }
	}