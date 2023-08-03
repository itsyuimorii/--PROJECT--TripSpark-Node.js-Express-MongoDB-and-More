
/**
 * @module       routes/reviewRoutes
 * @description  Review routes
 * @requires     module:express
 * @requires     module:controllers/reviewController
 * @requires     module:controllers/authController
 * @exports      module:routes/reviewRoutes
 * @version      1.0.0
 */


// routes/reviewRoutes.js
const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

// mergeParams: true allows us to access the tourId param from the tour router
const router = express.Router({ mergeParams: true });
// Protect all routes after this middleware
router.use(authController.protect);

// POST /tour/234fad4/reviews
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

// Protect all routes after this middleware
router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;
