const customerModel = require('../models/customer');

exports.customerHome = function(req, res, next) {
  customerModel.find((err, doc) => {
    res.status(200).json(doc);
  });
};

exports.createCustomer = function(req, res, next) {
  const data = req.body;
  customerModel.create(data, (err, doc) => {
    if (err) return next(err);
    res.send(doc);
  });
};

exports.editCustomer = function(req, res) {
  let query = { _id: req.params.id };
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
