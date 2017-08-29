var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // authenticating user if the user is valid they will proceed to the menu page
    app.post("/signin", passport.authenticate("local"), function(req, res) {
        res.redirect("/menu");
    });

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });
};