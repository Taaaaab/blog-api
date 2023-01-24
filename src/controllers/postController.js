const Post = require('../models/post');
const async = require('async');
const { body, validationResult } = require('express-validator');

exports.index = (req, res) => {
    return res.render("index", {
    });
};

exports.post_list_get = async (req, res) => {
    const posts = await Post.find();
    return res.send(posts);
};

exports.post_detail_get = async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id });
        return res.send(post);
    } catch {
        res.status(404);
        res.send({ error: "Post doesn't exist!" });
    }
};

exports.post_create_post = async (req, res) => {
    const post = new Post({
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      dateStamp: new Date(),
    })
    await post.save()
    return res.send(post);
};

exports.post_update_put = async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        dateStamp: new Date(),
      });
  
      await post.save();
      return res.send(post);
    } catch {
      res.status(404);
      res.send({ error: "Post doesn't exist!" });
    }
};

exports.post_delete = async (req, res) => {
    try {
      const post = await Post.findByIdAndRemove(req.params.id);
      return res.send(post);
    } catch {
      res.status(404);
      res.send({ error: "Post doesn't exist!" });
    }
};