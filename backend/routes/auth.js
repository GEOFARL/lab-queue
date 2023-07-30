import express from 'express';
import {
  getProfile,
  logout,
  singIn,
  singUp,
  updateProfile,
} from '../controllers/auth.js';

const router = express.Router();

router.post('/sing-up', singUp);
router.post('/sing-in', singIn);
router.post('/logout', logout);

router.route('/profile').get(getProfile).patch(updateProfile);

export default router;
