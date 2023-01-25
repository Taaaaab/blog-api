import { Router } from 'express';
const post_controller = require('../controllers/postController');
const comment_controller = require('../controllers/commentController');

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

// * COMMENTS * //

// Get comments for a post
router.get('/comments/:id', comment_controller.comment_list_get);

// Get individual comment
router.get('/comment/:id', comment_controller.comment_detail_get);

// Create comment
router.post('/comments/:id', comment_controller.comment_create_post);

// Update comment
router.put('/comments/:id', comment_controller.comment_update_put);

// Delete comment
router.delete('/comments/:id', comment_controller.comment_delete);

export default router;
