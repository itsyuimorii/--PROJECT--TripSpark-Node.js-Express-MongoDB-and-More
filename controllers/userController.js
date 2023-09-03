/**
 * @module       controllers/userController
 * @description  Controller functions for User
 * @requires     module:models/userModel
 * @requires     module:utils/catchAsync
 * @requires     module:utils/appError
 * @requires     module:controllers/handlerFactory
 * @exports      module:controllers/userController
 * @version      1.0.0
 */

const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

//------------------ **UPLOAD USER PHOTO** ------------------//
const multer = require('multer');

const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    // cb(null, 'public/img/users');
    callback(null, 'public/img/users');
  }, filename: (req, file, callback) => {
    // user-7676767abc-123456789.jpeg
    const ext = file.mimetype.split('/')[1];
    callback(null, `user-${req.user.id}-${Date.now()}.${ext}`);
  }
});


const multerFilter = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(
      new AppError('Not an image! Please upload only images.', 400),
      false
    );
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

//------------------ **UPLOAD USER PHOTO** ------------------//
exports.uploadUserPhoto = catchAsync(async (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  next();
}
);

//------------------ **FILTER USER DATA** ------------------//
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};
//------------------ **GET USER DATA** ------------------//
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

//------------------ **UPDATE USER DATA** ------------------//
exports.updateMe = catchAsync(async (req, res, next) => {
  console.log(req.file);
  console.log(req.body);


  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');
  if (req.file) filteredBody.photo = req.file.filename;

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

//------------------ **DELETE USER DATA** ------------------//
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null
  });
});

//------------------ **GET ALL USERS** ------------------//
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead'
  });
};

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);

// Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

