/**
 * @fileoverview This file contains all the functions that are used to handle the requests from the client side.
  * @exports getAllTours
  * @exports getTour
  * @exports createTour
  * @exports updateTour
  * @exports deleteTour
 */

const Tour = require('../models/tourModels');

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  //BUILD QUERY
  //1A) FILTERING
  filter() {

    // Create a queryObj object from req.query and copy it to a new object using the destructuring syntax
    const queryObj = { ...this.req.query };

    // Create an array of fields to be excluded, which should not be contained in queryObj
    const excludedFields = ['page', 'sort', 'limit', 'fields'];

    // Use a forEach loop to iterate through each element of the excludedFields array and delete the corresponding field in the queryObj object
    excludedFields.forEach(el => delete queryObj[el]);

    // Outputs the original req.query object and a filtered queryObj object for debugging and checking.
    console.log(req.query, queryObj);

    //1B) ADVANCED FILTERING
    // Convert the queryObj object to a JSON string and assign it to the queryStr variable.
    let queryStr = JSON.stringify(queryObj);
    // Use regular expressions to replace specific words (gte, gt, lte, lt) in queryStr with MongoDB query operators ($gte, $gt, $lte, $lt)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    console.log(JSON.parse(queryStr));
    // Use the find method to find matching tour routes in the database.
    this.query = this.query.find(JSON.parse(queryStr));
    // Return the entire object to allow method chaining.
    return this;

  }
  //2) SORTING
  sort() {
    // Check if the sort property exists in req.query
    if (req.queryString.sort) {
      // If it exists, use the sort method to sort the query results by the value of the sort property
      // Use the split method to split the sort property into an array of strings
      // Use the join method to join the array of strings into a string
      const sortBy = req.query.sort.split(',').join(' ');
      console.log(sortBy);
      // Use the sort method to sort the query results by the value of the sortBy variable
      this.query = this.query.sort(sortBy);
    } else {
      // If it does not exist, use the sort method to sort the query results by the value of the sort property
      this.query = this.query.sort('-createdAt');
      return this;
    }
  }
  //3) FIELD LIMITING
  limitFields() {
    //3) FIELD LIMITING
    if (this.queryString.fields) {
      // Use the split method to split the fields property into an array of strings
      // Use the join method to join the array of strings into a string
      const fields = req.query.fields.split(',').join(' ');
      // Use the select method to limit the query results to the value of the fields variable
      this.query = this.query.select(fields);
    } else {
      // If it does not exist, use the select method to limit the query results to the value of the fields property
      this.query = this.query.select('-__v');
      return this;
    }
  }
  //4) PAGINATION
  // Use the limit method to limit the query results to the value of the limit property
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    // if  (this.queryString.page) {
    //   const numTours = await Tour.countDocuments();
    //   if (skip >= numTours) throw new Error('This page does not exist');
    // }
    return this;
  }
}
exports.getAllTours = async (req, res) => {

  try {
    //EXECUTE QUERY
    const features = new APIFeatures(Tour.find(), req.query).filter().sort();
    const query = await features.query;

    //SEND RESPONSE
    const tours = await query;
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!'
    });
  };
};
exports.updateTour = async (req, res) => {
  try {
    const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

  } catch (err) {
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: updateTour
    }
  });
}


exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(204).json({
      status: 'success',
      data: null
    });
  }
};
