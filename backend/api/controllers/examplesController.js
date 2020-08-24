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

exports.list_user_examples = function(req, res) {
  // Get user id from the parameters
  let userId = req.params.userId;
  console.log(userId);
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
