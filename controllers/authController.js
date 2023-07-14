/**
 * @module controllers/authController
 * @description  Controller functions for authentication
 */

const User = require('../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');

//--------------**CREATE TOKEN**----------------
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

//--------------**SIGNUP USER**----------------
exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    })
    //create token
    const token = signToken(newUser._id);
    
    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    });
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
    const token = signToken(user._id);

    res.status(200).json({
        status: 'success',
        token
    });
});

//--------------**PROTECT ROUTES**----------------
exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();
    
    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
        users
        }
    });
    }
);
    