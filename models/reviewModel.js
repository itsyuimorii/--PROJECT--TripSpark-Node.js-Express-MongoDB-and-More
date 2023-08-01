//reviewModel.js

const mongoose = require('mongoose');


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

//virtual populate
reviewSchema.virtual('durationWeeks').get(function () {
    return this.duration / 7;
});

//virtual populate
tourSchema.virtual('reviews', {
    ref: 'Review',
    foreignField: 'tour',
    localField: '_id'
});
 
//preventing duplicate reviews
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

//query middleware
reviewSchema.pre(/^find/, function (next) {
    // this.populate({
    //     path: 'tour',
    //     select: 'name'
    // }).populate({
    //     path: 'user',
    //     select: 'name photo'
    // });
    this.populate({
        path: 'user',
        select: 'name photo'
    });
    next();
});



const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;

