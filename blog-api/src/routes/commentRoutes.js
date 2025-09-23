import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createComment, getComments } from '../controllers/commentController.js';

const router = express.Router();

router.get('/', getComments);
router.post('/', protect, createComment);

export default router;
