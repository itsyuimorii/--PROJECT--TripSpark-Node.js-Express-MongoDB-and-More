/**
 * APIFeatures class
 * @class
 * @param {object} query - MongoDB query object
 * @param {object} queryString - URL query string
 * @returns {object} - MongoDB query object
 * const features = new APIFeatures(Tour.find(), req.query)
 * .filter()
 * .sort()
 * .limitFields()
 * .paginate();
 * 
 */

class APIFeatures {
  constructor(query, queryString) {
    this.query = query; // MongoDB query object
    this.queryString = queryString; // URL query string
  }
  // 1A) Filtering
  filter() {
    const queryObj = { ...this.queryString }; // Destructure query string
    const excludedFields = ['page', 'sort', 'limit', 'fields']; // Exclude fields from query string
    excludedFields.forEach(el => delete queryObj[el]); // Delete excluded fields from query string

    // 1B) Advanced filtering
    let queryStr = JSON.stringify(queryObj); // Convert query string to JSON
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`); // Add $ to query string

    this.query = this.query.find(JSON.parse(queryStr)); // MongoDB query

    return this;
  }
  //  2) Sorting
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' '); // Convert query string to array
      this.query = this.query.sort(sortBy); // MongoDB query
    } else {
      this.query = this.query.sort('-createdAt');// MongoDB query
    }

    return this; // Return the current object for chaining other methods
  }
  // 3) Field limiting
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');// Convert query string to array
      this.query = this.query.select(fields);// MongoDB query
    } else {
      this.query = this.query.select('-__v');// MongoDB query, exclude __v field,
    }

    return this;
  }
  // 4) Pagination
  paginate() {
    const page = this.queryString.page * 1 || 1; // Convert string to number
    const limit = this.queryString.limit * 1 || 100;  
    const skip = (page - 1) * limit; // Calculate skip

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
module.exports = APIFeatures;
