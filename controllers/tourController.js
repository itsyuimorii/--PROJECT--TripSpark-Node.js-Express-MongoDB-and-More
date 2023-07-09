/**
 * @fileoverview This file contains all the functions that are used to handle the requests from the client side.
 * @exports getAllTours: This function is used to get all the tours from the database.
 * @exports getTour: This function is used to get a specific tour from the database.
 * @exports createTour: This function is used to create a new tour in the database.
 * @exports updateTour: This function is used to update a specific tour in the database.
 * @exports deleteTour: This function is used to delete a specific tour from the database.
 
 */

const Tour = require('../models/tourModels');

exports.getAllTours = async (req, res) => {
  
  try{
    // console.log(req.query);   
    //BUILD QUERY
    //1A) FILTERING
    // Create a queryObj object from req.query and copy it to a new object using the destructuring syntax
    const queryObj = {...req.query};
    
    // Create an array of fields to be excluded, which should not be contained in queryObj
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    
    // Use a forEach loop to iterate through each element of the excludedFields array and delete the corresponding field in the queryObj object
    excludedFields.forEach(el => delete queryObj[el]);
    
    // Outputs the original req.query object and a filtered queryObj object for debugging and checking.
    console.log(req.query, queryObj);

    //Use the filtered queryObj object as a parameter to find matching tour routes in the database.
    // const query = await Tour.find(queryObj);

    //EXECUTE QUERY
    // let querys = Tour.find(queryObj);

    //1B) ADVANCED FILTERING
    // Convert the queryObj object to a JSON string and assign it to the queryStr variable.
    let queryStr = JSON.stringify(queryObj);
    
    // Use regular expressions to replace specific words (gte, gt, lte, lt) in queryStr with MongoDB query operators ($gte, $gt, $lte, $lt)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    console.log(JSON.parse(queryStr));
    // Use the filtered queryStr object as a parameter to find matching tour routes in the database.
    let query = Tour.find(JSON.parse(queryStr));

    //2) SORTING
    let sortBy = '';
    // Check if the sort property exists in req.query
    if(req.query.sort){
      // If it exists, use the sort method to sort the query results by the value of the sort property
      // Use the split method to split the sort property into an array of strings
      // Use the join method to join the array of strings into a string
      const sortBy = req.query.sort.split(',').join(' ');
      console.log(sortBy);
      // Use the sort method to sort the query results by the value of the sortBy variable
      query = query.sort(sortBy);
    } else {
      // If it does not exist, use the sort method to sort the query results by the value of the sort property
      query = query.sort('-createdAt');
    }

    //3) FIELD LIMITING
    if(req.query.fields){
      // Use the split method to split the fields property into an array of strings
      // Use the join method to join the array of strings into a string
      const fields = req.query.fields.split(',').join(' ');
      // Use the select method to limit the query results to the value of the fields variable
      query = query.select(fields);
    } else {
      // If it does not exist, use the select method to limit the query results to the value of the fields property
      query = query.select('-__v');
    }

    //4) PAGINATION
    // Use the limit method to limit the query results to the value of the limit property
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;
    
    query = query.skip(skip).limit(limit);

    //SEND RESPONSE
    const tours = await query;
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getTour = async (req, res) => {
  try{
    const tour = await Tour.findById(req.params.id);
  }catch(err){
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
exports.updateTour = async(req, res) => {
  try{
    const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
  }catch(err){
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: updateTour
    }
  });
}


exports.deleteTour = async (req, res) => {
  try{
    await Tour.findByIdAndDelete(req.params.id);
  }catch(err){
  res.status(204).json({
    status: 'success',
    data: null
  });
  }
};
