var db = require("../models");

module.exports = function(app) {
 // GET route for retrieving menu item information chosen by the user
  app.get("/menu/:id", function(req, res) {
    db.MenuItem.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(db) {
      res.json(db);
    });
  });
  // POST route for populating the shopping cart
  app.post("/ShoppingCart", function(req, res) {
    console.log(req.body);
    db.ShoppingCart.create({
      Items: req.body.menuItem,
      Price: req.body.pody
    })
    .then(function(dbMenuItem) {
      res.json(dbMenuItem);
    });
  });
};