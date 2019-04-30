const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  dob: String
});

/* global db */
module.exports = db.model('Customer', customerSchema);
