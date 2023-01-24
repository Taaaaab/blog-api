import { Router } from 'express';
const post_controller = require('../controllers/postController');

const router = Router();

// Get all posts
router.get('/posts', post_controller.post_list_get);

// Get individual post
router.get('/posts/:id', post_controller.post_detail_get);

// Create post
router.post('/posts', post_controller.post_create_post);

// Update post
router.put('/posts/:id', post_controller.post_update_put);

// Delete post
router.delete('/posts/:id', post_controller.post_delete);

export default router;
