/**
 * @module controllers/userController
 * @description  Controller functions for user
*/

const User = require('../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

//--------------**FILTEROBJ**----------------
const filterObj =(obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if(allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};


//--------------**GETALLUSER**----------------
exports.getAllUsers = catchAsync(async(req, res,next) => {
  const user = await User.find();

  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: user.length,
    data: {
      user
    }   
  });
});
//--------------**UPDATEME**----------------
exports.updateMe = catchAsync(async(req, res, next) => {
  //1) Create error if user POSTs password data
  if(req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError('This route is not for password updates. Please use /updateMyPassword', 
      400
      )
    );
  }
  //2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');
  //3) Update user document
   const updateUser= await User.findByIdAndUpdate(req.user.id, filteredBody,{
    new: true,
    runValidators: true
  })
  res.status(200).json({
    status: 'success',
    data: {
      user: updateUser
    }
  });
});

//--------------**DELETEME**----------------
exports.deleteMe = catchAsync(async(req, res, next) => {
  //1) Create error if user POSTs password data
  await User.findByIdAndUpdate(req.user.id, {active: false});
  //2) Filtered out unwanted fields names that are not allowed to be updated
  //3) Update user document
  
  res.status(204).json({
    status: 'success',
    data: null
  });
});

 

//--------------**GETUSER**----------------
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};


exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};