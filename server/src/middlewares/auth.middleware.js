const jwt = require('jsonwebtoken')
const AppError = require('../utils/app-error.utils')

const protect = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    let token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return next(new AppError('You are not logged in', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded.id

    next()
  } else {
    next(new AppError('You are not logged in', 401))
  }
}

module.exports = {
  protect,
}
