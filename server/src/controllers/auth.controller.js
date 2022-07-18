const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const asyncHandler = require('../utils/async-handler.utils')
const AppError = require('../utils/app-error.utils')

/**
 * @description Signup a user
 * @route POST /api/auth/signup
 * @access Public
 */
const signup = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body
  const user = await User.create({ name, email, password })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })

  return res.status(201).json({
    status: 'success',
    token,
    user,
  })
})

/**
 * @description Login a user
 * @route POST /api/auth/login`
 * @access Public
 */
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return next(new AppError('Please provide an email and password', 400))
  }

  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    return next(new AppError('No user found with this email', 404))
  }

  const isMatch = await user.matchPassword(password)

  if (!isMatch) {
    return next(new AppError('Incorrect email or password', 401))
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })

  return res.status(200).json({
    status: 'success',
    token,
    user,
  })
})

const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user)

  return res.status(200).json({
    status: 'success',
    user,
  })
})

module.exports = {
  signup,
  login,
  getUser,
}
