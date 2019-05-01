const express = require('express'); // (npm install --save express)
const request = require('supertest');
const expect = require('chai').expect;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('../config.json');
global.db = global.db ? global.db : mongoose.createConnection(config.dbUrl);
const routes = require('../routes/routes.js');
var app;

function createApp() {
  app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/api/search-customer/:searchText?', routes.searchCustomer);

  return app;
}

describe('Our server', function() {
  before(function(done) {
    app = createApp();
    app.listen(8000, function(err) {
      if (err) {
        return done(err);
      }
      done();
    });
  });

  it('able to pull all customers', function(done) {
    request(app)
      .get('/api/search-customer')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, function(err, res) {
        if (err) {
          return done(err);
        }
        const data = res.body;
        expect(data.length).to.greaterThan(0);
        done();
      });
  });
});
