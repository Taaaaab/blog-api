const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    dateStamp: { type: Date, required: true },
});

// Virtual for book's URL
PostSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/posts/${this._id}`;
});

module.exports = mongoose.model("Post", PostSchema);