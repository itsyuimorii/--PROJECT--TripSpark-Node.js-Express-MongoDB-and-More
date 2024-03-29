/**
 * @module       controllers/reviewController
 * @description  Controller functions for Review
 * @requires     module:models/reviewModel
 * @requires     module:controllers/handlerFactory
 * @exports      module:controllers/reviewController
 * @version      1.0.0

 */

const Review = require('./../models/reviewModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

// ------------------ **GET ALL REVIEWS** ------------------//
exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
