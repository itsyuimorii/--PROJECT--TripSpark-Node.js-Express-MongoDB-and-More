/**
 * APIFeatures class for filtering, sorting, limiting fields, and pagination
 * @class APIFeatures
 * @param {Object} query - MongoDB query object
 * @param {Object} queryString - Query string parameters
 * @returns {Object} - Updated APIFeatures object
 * @example
 * const features = new APIFeatures(Tour.find(), req.query)
 * .filter()
 * .sort()
 * .limitFields()
 * .paginate();
 */

class APIFeatures {
  constructor(query, queryString) {
    this.query = query; // MongoDB query object
    this.queryString = queryString; // Query string parameters
  }

  filter() {
    const queryObj = { ...this.queryString }; // Copy query string object
    const excludedFields = ['page', 'sort', 'limit', 'fields']; // Array of excluded fields from filtering
    excludedFields.forEach(el => delete queryObj[el]); // Remove excluded fields from query object

    // Advanced filtering
    let queryStr = JSON.stringify(queryObj); // Convert query object to string
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`); // Replace comparison operators with MongoDB operators

    this.query = this.query.find(JSON.parse(queryStr)); // Apply the filtered query to the MongoDB find operation

    return this; // Return the updated APIFeatures object for method chaining
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' '); // Get sorting fields from query string and join them with space
      this.query = this.query.sort(sortBy); // Apply sorting to the MongoDB query using the provided fields
    } else {
      this.query = this.query.sort('-createdAt'); // Default sorting by 'createdAt' field in descending order
    }

    return this; // Return the updated APIFeatures object for method chaining
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' '); // Get selected fields from query string and join them with space
      this.query = this.query.select(fields); // Select only the specified fields in the MongoDB query
    } else {
      this.query = this.query.select('-__v'); // Exclude the '__v' field by default
    }

    return this; // Return the updated APIFeatures object for method chaining
  }

  paginate() {
    const page = this.queryString.page * 1 || 1; // Get the page number from query string (default to 1 if not provided)
    const limit = this.queryString.limit * 1 || 100; // Get the limit per page from query string (default to 100 if not provided)
    const skip = (page - 1) * limit; // Calculate the number of documents to skip based on page and limit

    this.query = this.query.skip(skip).limit(limit); // Apply pagination to the MongoDB query

    return this; // Return the updated APIFeatures object for method chaining
  }
}

module.exports = APIFeatures; // Export the APIFeatures class for use in other modules
