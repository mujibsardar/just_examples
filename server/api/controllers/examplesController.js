let mongoose = require('mongoose'),
Example = mongoose.model('Examples');
const ObjectId = require('mongoose').Types.ObjectId;

exports.list_examples = function(req, res) {
  Example.find({}, function(err, examples) {
    if (err)
      res.send(err);
    res.json(examples);
  });
};

exports.get_example = function(req, res) {
  let exampleId = req.params.exampleId;
  Example.findOne({_id: exampleId}, function(err, example) {
    if (err)
      res.send(err);
    res.json(example);
  });
};

exports.list_user_examples = function(req, res) {
  // Get user id from the parameters
  let userId = req.params.userId;
  Example.find({postedBy: userId}, function(err, examples) {
    if (err)
      res.send(err);
    res.json(examples);
  });
};

exports.create_an_example = function(req, res) {
  let new_example = new Example(req.body);
  new_example.postedBy = new ObjectId(req.authorId);
  new_example.save(function(err, example) {
    if (err)
      res.send(err);
    res.json(example);
  });
};


exports.delete_all = function(req, res) {
  Example.remove({}, err => {
    if (err)
      res.send(err);
    res.json({ success: 'success' });
  });
};

exports.search_examples = function(req, res) {
  let search = req.body.query;
  Example.find({$text: {$search: search}}, function (err, examples) {
      if (err) {
          res.send(err);
      } else {
          res.json(examples);
      }
  });
};
