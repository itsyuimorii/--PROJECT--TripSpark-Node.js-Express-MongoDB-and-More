/**
 * @fileoverview This file contains all the functions that are used to handle the requests from the client side.
  * @exports getAllTours
  * @exports getTour
  * @exports createTour
  * @exports updateTour
  * @exports deleteTour
 */
const Tour = require('../models/tourModels');
const APIFeatures = require('./../utils/apiFeatures');

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};
exports.getAllTours = async (req, res) => {
  //EXECUTE QUERY
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const tours = await features.query;

  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
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


exports.getTourStats = async (req, res, next) => {
  const stats = await Tour.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } }
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numTours: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    },
    {
      $sort: { avgPrice: 1 }
    },
    // {
    //   $match: { _id: { $ne: 'EASY' } }
    // }
  ]);
  res.status(200).json({
    status: 'success',
    data: {
      tour: stats
    }
  });
};

exports.getMonthlyPlan = async (req, res) => {
  try {
    const year = req.params.year * 1;
    const monthlyPlan = await Tour.aggregate([
      {
        //unwind deconstructs an array field from the input documents to output a document for each element.
        $unwind: '$startDates'
      },
      {
        //match filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`)
          }
        }
      },
      {
        //group aggregates documents by some specified expression and outputs to the next stage a document for each distinct grouping.
        $group: {
          _id: { $month: '$startDates' },
          numTourStarts: { $sum: 1 },
          //push adds an element to an array.
          tours: { $push: '$name' }
        }
      },
      {
        //addFields adds new fields to documents.
        $addFields: { month: '$_id' }
      },
      {
        //project specifies the inclusion of fields to output in the documents.
        $project: {
          _id: 0
        }
      },
    ]);
    res.status(201).json({
      status: 'success',
      data: {
        tour: monthlyPlan
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!'
    });
  };
};