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
    for (var i=0; i < req.body.menuItem.length; i++) {
      console.log(req.body.specialRequest[i]);
      db.ShoppingCart.bulkCreate([{
        Items: req.body.menuItem[i],
        specialRequest: req.body.specialRequest[i],
        Price: req.body.price[i]
      }])
      .then(function(dbMenuItem) {
        // res.json(dbMenuItem);
      });
    }
  });
  // POST route for populating the shopping cart
  app.post("/SingleItem", function(req, res) {
    console.log(req.body);
      db.ShoppingCart.bulkCreate([{
        Items: req.body.menuItem,
        specialRequest: req.body.specialRequest,
        Price: req.body.price
      }])
      .then(function(dbMenuItem) {
        // res.json(dbMenuItem);
      });
  });
};