const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ExampleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  major_tags: {
    type: [String],
    required: true
  },
  minor_tags: {
    type: [String],
    required: true
  }
});

module.exports = Example = mongoose.model("Examples", ExampleSchema);
