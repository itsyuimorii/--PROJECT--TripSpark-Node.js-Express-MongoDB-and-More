const AppError = require('./../utils/appError');
//--------------**HANDLE CAST ERROR**----------------
const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};
//--------------**HANDLE DUPLICATE FIELDS**----------------
const handleDuplicateFieldsDB = err => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  console.log(value);

  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};
//--------------**HANDLE VALIDATION ERROR**----------------s
const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

//----------------**HANDLE JWT ERROR**----------------
const handleJWTError = () => new AppError('💥Invalid token. Please log in again!', 401);


//----------------**SEND ERROR RESPONSE**----------------
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

//----------------**SEND ERROR RESPONSE IN PRODUCTION MODE**----------------
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

//----------------**HANDLE JWT EXPIRED ERROR**----------------
const handleJWTExpiredError = () => new AppError('💥Your token has expired! Please log in again.', 401);

//----------------**ERROR HANDLING MIDDLEWARE**----------------
module.exports = (err, req, res, next) => {
  // console.log(err.stack);

  err.statusCode = err.statusCode || 500; // Set status code to 500 if not provided
  err.status = err.status || 'error'; // Set status to 'error' if not provided

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res); // Send detailed error response in development mode
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    // Error handling for specific types of errors in production mode
    if (error.name === 'CastError') error = handleCastErrorDB(error); // Handle MongoDB CastError

    if (error.code === 11000) error = handleDuplicateFieldsDB(error); // Handle duplicate fields error

    if (error.name === 'ValidationError') error = handleValidationErrorDB(error); // Handle MongoDB ValidationError

    if (error.name === 'JsonWebTokenError') error = handleJWTError(); // Handle JWT error

    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError(); // Handle JWT expired error
    sendErrorProd(error, res); // Send generic error response in production mode
  }
};
