var path = require("path");

var db = require("./../models"); //define db variable as sequelize models

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	app.get('/menuItem', function(req, res) {
		db.MenuItem.findAll({}).then(function(response){
			return res.json(response);
		})
	});

	app.get('/menu', isAuthenticated, function(req, res) {
		db.MenuItem.findAll({}).then(function(response){
			return res.render('menu', {response});
		})
	});

	app.get('/register', function(req, res) {
		res.render('register');
	});

	app.get('/signin', function(req, res) {
		res.render('signin');
	});
}