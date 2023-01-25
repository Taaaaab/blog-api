const Comment = require('../models/comment');
const Post = require('../models/post');
const async = require('async');
const { body, validationResult } = require('express-validator');

// Get comments for a post
exports.comment_list_get = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id });
        return res.send(comments);
    } catch {
        res.status(404);
        res.send({ error: "Comments don't exist!" });
    }
};

// Get individual comment
exports.comment_detail_get = async (req, res) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.id });
        return res.send(comment);
    } catch {
        res.status(404);
        res.send({ error: "Comment doesn't exist!" });
    }
};

// Create comment on post
exports.comment_create_post = async (req, res) => {
    const comment = new Comment({
      postId: req.params.id,
      author: req.body.author,
      text: req.body.text,
      dateStamp: new Date(),
    })
    await comment.save();
    return res.send(comment);
};

// Update individual comment
exports.comment_update_put = async (req, res) => {
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, {
        author: req.body.author,
        text: req.body.text,
        dateStamp: new Date(),
      });
  
      await comment.save();
      return res.send(comment);
    } catch {
      res.status(404);
      res.send({ error: "Comment doesn't exist!" });
    }
};

exports.comment_delete = async (req, res) => {
    try {
      const comment = await Comment.findByIdAndRemove(req.params.id);
      return res.send(comment);
    } catch {
      res.status(404);
      res.send({ error: "Post doesn't exist!" });
    }
};