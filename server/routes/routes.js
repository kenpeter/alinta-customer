/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const customerModel = require('../models/customer');

exports.searchCustomer = function(req, res) {
  const searchText = req.params.searchText;

  if (
    searchText === undefined ||
    searchText === 'undefined' ||
    searchText.trim() === ''
  ) {
    customerModel.find((err, doc) => {
      res.status(200).json(doc);
    });
  } else {
    customerModel.find(
      {
        $or: [
          { firstName: { $regex: searchText, $options: 'i' } },
          { lastName: { $regex: searchText, $options: 'i' } }
        ]
      },
      (err, doc) => {
        res.status(200).json(doc);
      }
    );
  }
};

exports.createCustomer = function(req, res, next) {
  const data = req.body;
  customerModel.create(data, (err, doc) => {
    if (err) return next(err);
    res.send(doc);
  });
};

exports.editCustomer = function(req, res) {
  let query = { _id: req.body._id };

  customerModel.findOneAndUpdate(
    query,
    req.body,
    { upsert: true },
    (err, doc) => {
      if (err) return res.send(500, { error: err });
      return res.send({ update: 'success' });
    }
  );
};

exports.deleteCustomer = function(req, res) {
  let query = { _id: req.params.id };

  customerModel.findByIdAndRemove(query, err => {
    if (err) return res.send(500, { error: err });
    return res.send({ delete: 'success' });
  });
};
