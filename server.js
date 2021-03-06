var express = require("express"); //require express npm package
var bodyParser = require("body-parser"); //require body-parser npm package
var methodOverride = require('method-override'); //require methodOverride npm package
var session = require('express-session');
var passport = require('./config/passport');

// Sets up the Express App
// =============================================================
var app = express(); //create app variable from express function
var PORT = process.env.PORT || 8080; //define PORT at 8080

// Requiring our models for syncing
var db = require("./models"); //define db variable as sequelize models

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public")); // Static directory for using public folder's css and images
app.use(methodOverride('_method')); //include methodOverride for using more express post methods

// User sessions to track user's login in status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
var exphbs = require("express-handlebars"); //require express-handlebars npm package

app.engine("handlebars", exphbs({ defaultLayout: "main", helpers: require("./config/handlebars.js") })); //initialize handlebars with main as HTML body
app.set("view engine", "handlebars"); //set handlebars as default view

// Routes
// =============================================================
require("./routes/api-register-routes.js")(app);
require("./routes/api-signin-routes.js")(app);
require("./routes/shoppingCart-routes")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
//{force:true}
db.sequelize.sync({}).then(function() { //sync our models and then
  app.listen(PORT, function() { //add event listener for port number
    console.log("App listening on PORT " + PORT);
  });
}); 