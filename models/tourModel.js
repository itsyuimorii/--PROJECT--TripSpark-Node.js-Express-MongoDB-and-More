const validator = require('validator');
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'A tour must have a name'], //validator
      unique: true
    },
    rating: {
      type: Number,
      default: 4.5
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price']
    }
  });

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;

  
  // const testTour = new Tour({
  //   name: '京都桜の名所巡り',
  //   price: 997
  // });
  
  // testTour.save().then(doc => {
  //   console.log(doc);
  // }).catch(err => {
  //   console.log('ERROR: ', err);
  // });
  
  