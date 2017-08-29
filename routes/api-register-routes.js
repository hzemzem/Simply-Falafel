var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // POST route to create a new user.
  app.post("/register", function(req, res) {
    db.User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(function() {
        res.redirect('/signin');
    });
  });
};