import { Router } from 'express';
const Post = require('../models/post');

const router = Router();

// Get all posts
router.get('/posts', async (req, res) => {
  const posts = await Post.find();
  return res.send(posts);
});

// Get individual post
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    return res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

// Create post
router.post('/posts', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    dateStamp: new Date(),
  })
  await post.save()
  return res.send(post);
});

// Update post
router.put('/posts/:id', async (req, res) => {
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
});

// Delete post
router.delete('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.id);
    return res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

export default router;
