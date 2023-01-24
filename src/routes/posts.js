import { Router } from 'express';
const router = Router();
const post_controller = require('../controllers/postController');

/// ROUTES ///

// GET home page.
router.get('/', post_controller.index);

export default router;
