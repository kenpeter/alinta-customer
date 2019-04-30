const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config.json');

global.db = global.db ? global.db : mongoose.createConnection(config.dbUrl);
// db needs to before the route
const routes = require('./routes/routes.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/search-customer/:searchText?', routes.searchCustomer);
app.post('/api/create-customer', routes.createCustomer);
app.post('/api/edit-customer', routes.editCustomer);
app.get('/api/delete-customer/:id', routes.deleteCustomer);

const server = app.listen(8000, function() {
  console.log('app running on port.', server.address().port);
});
