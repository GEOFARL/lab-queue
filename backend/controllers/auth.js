import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  passwordEquals,
} from '../utils/validation.js';

// @desc    Sing up a new user
// @route   POST /api/auth/sing-up
// @access  Public
const singUp = asyncHandler(async (req, res, next) => {
  console.log('sing up');
  const { name, email, imageUri, password, confirmPassword } = req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Validate user inputs
  if (!passwordEquals(password, confirmPassword)) {
    res.status(400);
    throw new Error('Passwords do not match');
  }

  if (!isValidName(name)) {
    res.status(400);
    throw new Error('Name should only contain alphabets and spaces');
  }

  if (!isValidEmail(email)) {
    res.status(400);
    throw new Error('Not valid email');
  }

  if (!isValidPassword(password)) {
    res.status(400);
    throw new Error(
      'Password should contain at least one uppercase letter, one lowercase letter, and one number'
    );
  }

  const user = await User.create({ name, email, imageUri, password });

  if (user) {
    generateToken(res, user._id);

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
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
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: 'Logout User' });
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
