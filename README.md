<div align=center>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png">
    <h1> ⛺️ Node.js, Express, MongoDB & More: The Complete Bootcamp 2023 </h1>
</div>



<div align=center>
    <a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/">Course Link</a> |
    <a href=" ">Final Project</a> |
    <a href=" ">Certification</a> |
</div>

Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)

<div align="center">

|Section|Topic|Problem Sets|
|-----|-----------|----|
|Section 0 | RestfulAPI |[code](https://github.com/itsyuimorii/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/tree/01_restfulapi)|
|Section 1| Mongodb & mongoose |[code](https://github.com/itsyuimorii/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/tree/02_mongodb)|
|Section 2 | Error handling |[code](https://github.com/itsyuimorii/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/tree/03_error_handling)|
|Section 3|  |  |
|Section 4 | Libraries |  |
| Section 5 | Unit Tests |  |
|Section 6 | File I/O |  |
|Section 7 | Regular Expressions |  |
|Section 8 | OOP |  |
|Section 9 | ET Cetera |  |
</div>







<div align="left">

## ⚙️ Starting a Node.js Project

1. Install Project Dependencies

   Run the following command in the project's root directory to download and install all the required dependencies:

   ```bash
   npm install
   ```

   Optionally, if you have specific development dependencies, you can use the `--dev` flag:

   ```bash
   npm install --dev
   ```

2. Configure Environment Variables and Configuration Files (If Required)

   If your project requires environment variables or configuration files, follow the instructions in the project documentation to configure them. This may involve creating a `.env` file and filling in the necessary variables or modifying relevant sections in the project's configuration files.

3. Start the Project

   In the project's root directory, run the following command to start the project:

   ```bash
   npm start
   ```

   

## 📗 Takeaway

### Configuring `scripts` in package.json

In your `package.json` file, you can configure the `scripts` section to define custom commands for running your server. Here's an example of how you can configure the `start` and `start:prod` scripts:

```json
"scripts": {
  "start": "nodemon server.js",
  "start:prod": "NODE_ENV=production nodemon server.js"
}
```

With the above configuration, you can run the server using the following commands:

> Start server in development mode

```bash
npm start
```

This command will use `nodemon` to run the `server.js` file, allowing automatic server restarts whenever changes are made to the code during development.

> Start server in production mode

```bash
npm run start:prod
```

> mongoose
  
  ```bash
  npm i mongoose --legacy-peer-deps
  
  ```
  
  
This command will set the `NODE_ENV` environment variable to `"production"` and then use `nodemon` to run the `server.js` file. Running the server in production mode may involve additional optimizations and configurations specific to your application.

Note that when using `npm run` to execute a script, you need to prefix the script name with `run`.

Now, you can start your server by using either `npm start` or `npm run start:prod`, depending on the desired mode. 

### Configuring ESLint and Prettier

With the above configuration, you can run the server using the following commands:

In the root directory of your project, run the following command to install the necessary dependencies:

```bash
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react --save-dev
```

### Configuring MongoDB Atlas

1. Visit the MongoDB Atlas website: https://www.mongodb.com/cloud/atlas.
2. Create an account or log in to your existing account.
3. In the Atlas dashboard, click on "Create New Cluster".
4. Choose your preferred cloud provider (e.g., AWS, Azure, or Google Cloud Platform).
5. Select the region (geographic location) where you want your data to be stored.
6. Configure cluster options, including cluster name, cluster size, and storage capacity.
7. Advanced options such as authentication, virtual private cloud (VPC), network connectivity, etc., can be configured even if you're using the free M0 cluster.
8. Click on "Create Cluster".
9. On the cluster overview page, click on "Connect".
10. Choose "Connect your application".
11. Copy the connection string from the "Connection String Only" tab.

### [MVC architecture](https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/)

**APPLICATION LOGIC** (controller)

- 👉  Codethatisonlyconcernedabouttheapplication’s implementation, not the underlying business problem we’re trying to solve (e.g. showing and selling tours);
- 👉  Concernedaboutmanagingrequestsandresponses;
- 👉  Abouttheapp’smoretechnicalaspects;
- 👉  Bridgebetweenmodelandviewlayers.

**BUSINESS LOGIC**(model)

- 👉 Codethatactuallysolvesthebusinessproblemweset

out to solve;

- 👉 Directlyrelatedtobusinessrules,howthebusiness works,andbusinessneeds;

- 👉 Examples:

  - 👉  Creating new tours in the database;

  - 👉  Checking if user’s password is correct;

  - 👉  Validating user input data;

  - 👉  Ensuring only users who bought a tour can review it.

**Fat models/thin controllers:** offload as much logic as possible into the models, and keep the controllers as simple and lean as possible.

### [Mongoose](https://mongoosejs.com/docs/guide.html)

- [Model methods](https://mongoosejs.com/docs/models.html)

- [Queries methods](https://mongoosejs.com/docs/queries.html)

### [Mongoose query middleware](https://mongoosejs.com/docs/middleware.html#types-of-middleware)

- [Document middleware](https://mongoosejs.com/docs/middleware.html#types-of-middleware)
- [Query middleware](https://mongoosejs.com/docs/middleware.html#types-of-middleware)
- [Aggregate middleware](https://mongoosejs.com/docs/middleware.html#types-of-middleware)

### `toJSON` and `toObject` 

This code sets the `toJSON` and `toObject` options on the `tourSchema` object, enabling it to include virtual properties when converting to a JSON string or a regular JavaScript object.

Here are the comments for this code:

```javascript
const tourSchema = new mongoose.Schema(
  {
    // Schema definitions...
  },
  {
    toJSON: { virtuals: true },   // Include virtual properties when converting to JSON string
    toObject: { virtuals: true }  // Include virtual properties when converting to regular JavaScript object
  }
);
```

This code is typically used within the Mongoose schema definition. By setting the `virtuals` property of the `toJSON` and `toObject` options to `true`, it instructs Mongoose to include the defined virtual properties when converting the document to a JSON string or a regular JavaScript object.

Virtual properties are properties that are not stored in the database but are computed or derived based on existing properties. They can be used to provide additional data or calculated property values without the need to explicitly store them in the database.

With the `toJSON` and `toObject` options set, when you convert the document to a JSON string using `JSON.stringify()` or to a regular JavaScript object using the `toObject()` method, the virtual properties will be included in the result.


### import import-dev-data.js into mongodb

```bash
node dev-data/data/import-dev-data.js --import
```

> import-dev-data.js
```js
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModels');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('DB connection successful!');
  } catch (err) {
    console.error('DB connection failed:', err);
    process.exit(1);
  }
};

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importDevData = async () => {
  try {
    await connectDB();
    await Tour.create(tours);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.error('Error loading data:', err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteDevData = async () => {
  try {
    await connectDB();
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.error('Error deleting data:', err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importDevData();
} else if (process.argv[2] === '--delete') {
  deleteDevData();
}

```

### APIFeatures


```js
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
```

###  Aggregation Pipeline: Matching and Grouping Documents

> [Aggregation document](https://docs.mongodb.com/manual/aggregation/)

### Vitual Properties

> https://mongoosejs.com/docs/tutorials/virtuals.html

### [Mongoose middleware](https://mongoosejs.com/docs/middleware.html)

 
- QUERY MIDDLEWARE
- MODEL MIDDLEWARE
- DOCUMENT MIDDLEWARE 
- AGGREGATION MIDDLEWARE

### DATA validation

 
### Error handling with Express

```bash
npm i ndb --save-dev
```

```json
"scripts": {
  "start": "nodemon server.js",
  "start:prod": "NODE_ENV=production nodemon server.js",
  "debug": "ndb npm start"
}
```

  