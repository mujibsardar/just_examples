const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RatingSchema = new Schema({
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  voteUp: {
    type: Boolean,
    default: false
  },
  voteNeutral: {
    type: Boolean,
    default: false
  },
  voteDown: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Rating = mongoose.model("Ratings", RatingSchema);
