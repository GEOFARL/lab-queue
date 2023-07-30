import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

// @desc    Sing up a new user
// @route   POST /api/auth/sing-up
// @access  Public
const singUp = asyncHandler(async (req, res, next) => {
  res.json('Register user');
  // const { email, password, name, imageUri } = req.body;
  // const user = User.find({ email });

  // if (user) {
  //   res.status(400);
  //   throw new Error('User already exists');
  // }
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
