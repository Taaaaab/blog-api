const User = require('../models/user');
const async = require('async');
const { body, validationResult } = require('express-validator');

exports.user_list_get = async (req, res) => {
    const users = await User.find();
    return res.send(users);
};

exports.user_detail_get = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        return res.send(user);
    } catch {
        res.status(404);
        res.send({ error: "User doesn't exist!" });
    }
};

exports.user_create_post = async (req, res) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      admin: req.body.admin,
    })
    await user.save()
    return res.send(user);
};

exports.user_delete = async (req, res) => {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      return res.send(user);
    } catch {
      res.status(404);
      res.send({ error: "User doesn't exist!" });
    }
};