/**
 * @module controllers/authController
 * @description  Controller functions for authentication
 */
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

//--------------**GENERATE TOKEN**----------------
const signToken = id => {
    //payload, secret, options
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

//--------------**CREATE TOKEN & SEND TOKEN**----------------
const createSendToken = (user, statusCode, res) => {
    //create token
    const token = signToken(user._id);

    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user
      }
    });
  };

//--------------**SIGNUP USER**----------------
exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });
    createSendToken(newUser, 201, res);
  });

//--------------**LOGIN USER**----------------
exports.login = catchAsync(async(req, res, next) => {
    const { email, password } = req.body;
    // 1) Check if email and password exist
    if(!email || !password) {
        return next(new AppError('💥Please provide email and password!', 400));
    }
    // 2) Check if user exists && password is correct
    const user =await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('💥Incorrect email or password', 401));
    }
    // 3）If everything ok, send token to client
    createSendToken(user, 200, res);
});

 
//--------------**PROTECT ROUTES**----------------
exports.protect = catchAsync(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }
    // console.log(token);
    if(!token) {
        return next(new AppError('💥You are not logged in! Please log in to get access.', 401));
    }
    //  authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjBiYmQ5Zjg3NzgyZjhhYzg5OTI3NyIsImlhdCI6MTY4OTMwNDAyNSwiZXhwIjoxNjk3MDgwMDI1fQ.Ic45IuSdWdMfXmFT701iTQDlFpplQcg2wHHMceqx39s',

    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log(decoded);
    //{ id: '64b0bbd9f87782f8ac899277', iat: 1689304025, exp: 1697080025 }
 
    // 3) Check if user still exists
    const freshUser = await User.findById(decoded.id);

    user.findOne({ _id: decoded.id });
    //if user is not found or deleted
    if(!currentUser) {
        return next(new AppError('💥The user belonging to this token do es no longer exist.', 401));
    } 
    // 4) Check if user changed password after the token was issued
    if(currentUser.changedPasswordAfter(decoded.iat)) {
        return next(new AppError('💥User recently changed password! Please log in again.', 401));
    }
  // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
  next();
});

 