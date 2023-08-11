import express from 'express';
import {
  getProfile,
  logout,
  singIn,
  singUp,
  updateProfile,
} from '../controllers/auth.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/sing-up', singUp);
router.post('/sing-in', singIn);
router.post('/logout', logout);

router.route('/profile').get(protect, getProfile).patch(protect, updateProfile);

export default router;
