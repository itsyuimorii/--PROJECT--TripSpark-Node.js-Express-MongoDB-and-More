const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  try{
    const tours = await Tour.find()  
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
