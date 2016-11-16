var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var db = massive.connectSync({
  connectionString : 'postgres://postgres:bbNLtrc99@localhost/sandbox'
});

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.set('db', db);
var controller = require('./js/controller.js');

app.get('/api/products', controller.getAll);
app.get('/api/product/:productId', controller.getOne);
app.put('/api/product/:productId', controller.update);
app.post('/api/product', controller.create);
app.delete('/api/product/:productId', controller.delete);

app.listen(3000, function() {
  console.log('Server is listening on 3000');
});
