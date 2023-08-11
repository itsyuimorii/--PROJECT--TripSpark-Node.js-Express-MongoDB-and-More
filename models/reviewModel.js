/**
 * @module       reviewModel
 * @description  Review model
 * @requires     module:mongoose
 * @requires     module:tourModel
 * @exports      module:reviewModel
 * @version      1.0.0
 */
const mongoose = require('mongoose');
const Tour = require('./tourModel');

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, 'Review can not be empty!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createAt: {
        type: Date,

        default: Date.now()
    },
    //parent referencing
    tour: {
        type: mongoose.Schema.ObjectId,
        ref: 'Tour',
        required: [true, 'Review must belong to a tour.']
    },
    //parent referencing
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    }
},
//virtual populate
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

//preventing duplicate reviews
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

//static method
reviewSchema.pre(/^find/, function(next) {
  // this.populate({
  //   path: 'tour',
  //   select: 'name'
  // }).populate({
  //   path: 'user',
  //   select: 'name photo'
  // });

  this.populate({
    path: 'user',
    select: 'name photo'
  });
  next();
});
 
 

// reviewSchema.statics.calcAverageRatings = async function(tourId) {
//     const stats = await this.aggregate([
//       {
//         $match: { tour: tourId }
//       },
//       {
//         $group: {
//           _id: '$tour',
//           nRating: { $sum: 1 },
//           avgRating: { $avg: '$rating' }
//         }
//       }
//     ]);
//     console.log(stats);
// };

// reviewSchema.pre('save', function(next) {
//     //this points to current review
//     this.constructor.calcAverageRatings(this.tour);
//     next();
// });

//     if (stats.length > 0) {
//       await Tour.findByIdAndUpdate(tourId, {
//         ratingsQuantity: stats[0].nRating,
//         ratingsAverage: stats[0].avgRating
//       });
//     } else {
//       await Tour.findByIdAndUpdate(tourId, {
//         ratingsQuantity: 0,
//         ratingsAverage: 4.5
//       });
//     }
//   };
  
//   reviewSchema.post('save', function() {
//     // this points to current review
//     this.constructor.calcAverageRatings(this.tour);
//   });
  
//   // findByIdAndUpdate
//   // findByIdAndDelete
//   reviewSchema.pre(/^findOneAnd/, async function(next) {
//     this.r = await this.findOne();
//     // console.log(this.r);
//     next();
//   });
  
//   reviewSchema.post(/^findOneAnd/, async function() {
//     // await this.findOne(); does NOT work here, query has already executed
//     await this.r.constructor.calcAverageRatings(this.r.tour);
//   });
  
  const Review = mongoose.model('Review', reviewSchema);
  
  module.exports = Review;
  