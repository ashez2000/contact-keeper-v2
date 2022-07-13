class AppError {
  constructor(message, statusCode) {
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = AppError
