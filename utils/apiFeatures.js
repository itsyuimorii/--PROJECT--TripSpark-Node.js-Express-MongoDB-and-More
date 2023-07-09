class APIFeatures {
    constructor(query, queryString) {
      this.query = query; // Initialize the query property with the query parameter
      this.queryString = queryString; // Initialize the queryString property with the queryString parameter
    }
  
    filter() {
      const queryObj = { ...this.queryString }; // Create a copy of the queryString object
      const excludedFields = ['page', 'sort', 'limit', 'fields']; // Specify the fields to be excluded from the query
  
      // Remove the excluded fields from the queryObj
      excludedFields.forEach(el => delete queryObj[el]);
  
      // Advanced filtering
      let queryStr = JSON.stringify(queryObj); // Convert the queryObj to a string
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`); // Replace certain operators with MongoDB operators
  
      this.query = this.query.find(JSON.parse(queryStr)); // Update the query with the filtered results
  
      return this;
    }
  
    sort() {
      if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(',').join(' '); // Extract the sort criteria from the queryString and format it
        this.query = this.query.sort(sortBy); // Sort the query based on the sortBy criteria
      } else {
        this.query = this.query.sort('-createdAt'); // If no sort criteria provided, sort by 'createdAt' field in descending order
      }
  
      return this;
    }
  
    limitFields() {
      if (this.queryString.fields) {
        const fields = this.queryString.fields.split(',').join(' '); // Extract the fields to be included from the queryString and format it
        this.query = this.query.select(fields); // Select only the specified fields in the query
      } else {
        this.query = this.query.select('-__v'); // Exclude the '__v' field from the query result
      }
  
      return this;
    }
  
    paginate() {
      const page = this.queryString.page * 1 || 1; // Extract the page number from the queryString, convert to number, default to 1 if not provided
      const limit = this.queryString.limit * 1 || 100; // Extract the limit from the queryString, convert to number, default to 100 if not provided
      const skip = (page - 1) * limit; // Calculate the number of documents to skip based on the page and limit
  
      this.query = this.query.skip(skip).limit(limit); // Skip the specified number of documents and limit the result to the specified number
  
      return this;
    }
  }
  
  module.exports = APIFeatures; // Export the APIFeatures class for external use
  