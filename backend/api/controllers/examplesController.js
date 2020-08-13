let mongoose = require('mongoose'),
Example = mongoose.model('Examples');

exports.list_examples = function(req, res) {
  Example.find({}, function(err, examples) {
    if (err)
      res.send(err);
    res.json(examples);
  });
};

exports.create_an_example = function(req, res) {
  let new_example = new Example(req.body);
  new_example.save(function(err, example) {
    if (err)
      res.send(err);
    res.json(example);
  });
};
