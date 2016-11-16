var app = require('../server');
var db = app.get('db');

module.exports = {
  create: function(req, res, next) {
    var name = req.body.name, desc = req.body.description, price = req.body.price, img = req.body.imgurl;
    console.log('create');
    db.create_product([name, desc, price, img], function(err, product) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(product);
      }
    });
  },
  getOne: function(req, res, next) {
    var id = req.params.productId;
    console.log('getOne');
    db.read_product([id], function(err, product) {
      if (err) {
        res.status(500).json(err);
      } else if (!product[0]) {
        res.status(404).json('User does not exist');
      } else {
        res.json(product);
      }
    });
  },
  getAll: function(req, res, next) {
    console.log('getAll');
    db.read_products(function(err, product) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(product);
      }
    });
  },
  update: function(req, res, next ) {
    console.log('update');
    var id = req.params.productId, desc = req.query.desc;
    db.update_product([id, desc], function(err, product) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(product);
      }
    });
  },
  delete: function(req, res, next) {
    console.log('delete');
    var id = req.params.productId;
    db.delete_product([id], function(err, product) {
      res.sendStatus(200);
    });
  }
};
