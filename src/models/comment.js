const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  dateStamp: { type: Date, required: true },
})

module.exports = mongoose.model("Comment", CommentSchema);