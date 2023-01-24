const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = mongoose.model(
  "Users",
  new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
  })
);

const Posts = mongoose.model(
  "Posts",
  new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    dateStamp: { type: Date, required: true },
  })
);

const Comments = mongoose.model(
  "Comments",
  new Schema({
    author: { type: String, required: true },
    text: { type: String, required: true },
    dateStamp: { type: Date, required: true },
  })
);

export default {
  Users,
  Posts,
  Comments,
};