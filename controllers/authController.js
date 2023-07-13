const User = require('../models/userModel');
const catchAsync = require('./../utils/catchAsync');


exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    })
  });

exports.login = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Login route'
    });
}

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
    