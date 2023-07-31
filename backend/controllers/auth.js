import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// @desc    Sing up a new user
// @route   POST /api/auth/sing-up
// @access  Public
const singUp = asyncHandler(async (req, res, next) => {
  const { name, email, imageUri, password, confirmPassword } = req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({ name, email, imageUri, password });

  if (user) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 30 * 24 * 3600 * 1000,
      sameSite: 'strict',
    });

    res.json('Register user');
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Sing in user
// @route   POST /api/auth/sing-in
// @access  Public
const singIn = asyncHandler(async (req, res, next) => {
  res.json('Sing in user');
});

// @desc    Logout a user
// @route   POST /api/auth/logout
// @access  Public
const logout = asyncHandler(async (req, res, next) => {
  res.json('Logout a user');
});

// @desc    Get user's info
// @route   GET /api/auth/profile
// @access  Private
const getProfile = asyncHandler(async (req, res, next) => {
  res.json("Get user's profile");
});

// @desc    Update user's info
// @route   PATCH /api/auth/profile
// @access  Private
const updateProfile = asyncHandler(async (req, res, next) => {
  res.json("Update user's info");
});

export { singUp, singIn, logout, getProfile, updateProfile };
