class AppError extends Error {
  constructor(message, statusCode) {
    // call the parent constructor and pass the error message
    super(message);

    // set the HTTP status code
    this.statusCode = statusCode;

    // set the status of the error
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    // set the isOperational flag to true
    this.isOperational = true;

    // capture the stack trace of the error
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
