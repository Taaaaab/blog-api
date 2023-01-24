const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
  })
);

const Post = mongoose.model(
  "Post",
  new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    dateStamp: { type: Date, required: true },
  })
  // Virtual for post URL
  .virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/posts/${this._id}`;
})

);

const Comment = mongoose.model(
  "Comment",
  new Schema({
    author: { type: String, required: true },
    text: { type: String, required: true },
    dateStamp: { type: Date, required: true },
  })
);

export default {
  User,
  Post,
  Comment,
};