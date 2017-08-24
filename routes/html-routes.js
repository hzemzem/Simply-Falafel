var path = require("path");

var db = require("./../models"); //define db variable as sequelize models

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	app.get('/menu', function(req, res) {
		db.MenuItem.findAll({}).then(function(response){
			// var meals = [];
			// for (var i=0; i < response.length; i++) {
			// 	if (response[i].category === "Meal") {
			// 		meals.push(response);
			// 		// meals = JSON(response);
			// 	}
			// }
			// console.log(meals);
			return res.render('menu', {response});
		})
	});

}