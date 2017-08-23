var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

	app.get('/menu', function(req, res) {
		db.MenuItem.findAll({}).then(function(response){
			return res.render('menu', {response});
		})
	});

}