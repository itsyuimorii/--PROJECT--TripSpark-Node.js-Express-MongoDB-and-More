const User = require('../models/userModel');

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);
    
    res.status(201).json({
        status: 'success',
        data: {
        user: newUser
        }
    });
    }
);

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
    