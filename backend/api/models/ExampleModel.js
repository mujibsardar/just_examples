const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ExampleSchema = new Schema({
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  comments: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Comment'
  }],
  ratings: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Rating'
  }],
  major_tags: {
    type: [String],
    required: true
  },
  minor_tags: {
    type: [String],
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Example = mongoose.model("Examples", ExampleSchema);
