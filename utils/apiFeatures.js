class APIFeatures {
  constructor(query, queryString) {
    this.query = query; // Mongoose query object
    this.queryString = queryString; // Query string from the URL parameters
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]); // Remove excluded fields from the query object

    // 1B) Advanced filtering using MongoDB operators
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`); // Replace the comparison operators with MongoDB operators

    this.query = this.query.find(JSON.parse(queryStr)); // Apply the filter to the query object

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' '); // Get the fields to sort by from the query string
      this.query = this.query.sort(sortBy); // Apply sorting to the query object
    } else {
      this.query = this.query.sort('-createdAt'); // Sort by createdAt field in descending order by default
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' '); // Get the fields to include from the query string
      this.query = this.query.select(fields); // Include only the specified fields in the query result
    } else {
      this.query = this.query.select('-__v'); // Exclude the __v field from the query result by default
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1; // Get the page number from the query string, default to 1
    const limit = this.queryString.limit * 1 || 100; // Get the number of results per page from the query string, default to 100
    const skip = (page - 1) * limit; // Calculate the number of results to skip based on the page number and limit

    this.query = this.query.skip(skip).limit(limit); // Apply pagination to the query object

    return this;
  }
}

module.exports = APIFeatures;
