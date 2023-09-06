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
const sharp = require('sharp')
const multer = require('multer')


// Configure storage for uploaded files in memory
const multerStorage = multer.memoryStorage();


// Define a filter to accept only image files
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    // If the file is an image, accept it
    cb(null, true);
  } else {
    // If the file is not an image, reject it with a 400 (Bad Request) error
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};


// Initialize multer with storage and filter configurations
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

// Export middleware for uploading a single file named 'photo'
exports.uploadUserPhoto = upload.single('photo');


//------------------ **RESIZING USERPHOTO** ------------------//

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {

  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

//------------------ **FILTER DATA** ------------------//
/**
 * used to filter an object's properties and return a new object containing only the properties that are specified in the allowedFields array. 
 * @param {*} obj 
 * @param  {...any} allowedFields 
 * @returns 
 */
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

//------------------ **UPDATE USER DATA** ------------------//
exports.updateMe = catchAsync(async (req, res, next) => {
  // console.log(req.file)
  // console.log(req.body)


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

