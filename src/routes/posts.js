import { Router } from 'express';
const post_controller = require('../controllers/postController');

const router = Router();
/// ROUTES ///

// GET home page.
router.get('/', post_controller.index);

export default router;
