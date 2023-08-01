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


const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;

