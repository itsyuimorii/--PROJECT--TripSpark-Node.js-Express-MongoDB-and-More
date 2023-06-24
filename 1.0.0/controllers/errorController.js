// Import the custom error class
const AppError = require('./../utils/appError');

// Handle cast errors that occur when converting a value to a different type
const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};
// Handle duplicate field errors that occur when a value violates a unique constraint
const handleDuplicateFieldsDB = err => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  console.log(value);

  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};
// Handle validation errors that occur when data does not meet specified requirements
const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });

    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error('ERROR 💥', err);

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }
};
//This is an error handling middleware function in an Express application.
module.exports = (err, req, res, next) => {
  // console.log(err.stack);
  //This line exports a middleware function with four parameters - err for the error, req for the request, res for the response, and next for the next middleware function in the chain.
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  //This sets the status code and status of the error. If the error object does not have a statusCode property, it sets the statusCode to 500 (internal server error). If the error object does not have a status property, it sets the status to 'error'.
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);

    sendErrorProd(error, res);
  }
};

/* This checks the value of the NODE_ENV environment variable. If it is set to 'development', it calls the sendErrorDev function to send a detailed error response with the error stack trace. If it is set to 'production', it creates a copy of the err object and performs some error handling based on the type of error. Then it calls the sendErrorProd function to send a generic error response without the error stack trace.

The handleCastErrorDB, handleDuplicateFieldsDB, and handleValidationErrorDB functions are not shown in the code snippet and are presumably defined elsewhere in the application. They handle specific types of errors that can occur in the database layer. */
