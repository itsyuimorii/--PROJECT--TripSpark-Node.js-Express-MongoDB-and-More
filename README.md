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



## ☻ Starting a Node.js Project

1. Install Project Dependencies:
   - Run `npm install` in the project's root directory to download and install all the required dependencies.
   - You can use the `--dev` flag with `npm install` to install development dependencies.

2. Configure Environment Variables and Configuration Files:
   - If your project requires environment variables or configuration files, follow the project documentation to configure them.
   - Create a `.env` file and fill in the necessary variables or modify relevant sections in the project's configuration files.

3. Start the Project:
   - In the project's root directory, run `npm start` to start the project.
   - This will execute the command specified in the `"start"` script in the `package.json` file.

4. `package.json`:
   - The `package.json` file contains metadata about your project and its dependencies.
   - It includes scripts that can be executed using `npm run <script-name>`.
   - The `"start"` script is used to start the project using `nodemon` to automatically restart the server on file changes.
   - The `"start:prod"` script starts the project in production mode.
   - The `"debug"` script can be used for debugging with `ndb`.

5. `config.env`:
   - The `config.env` file contains environment variables used in the project.
   - It defines variables like `NODE_ENV`, `PORT`, and `DATABASE`.
   - The `DATABASE_PASSWORD` variable is specific to your MongoDB connection.

6. `server.js`:
   - The `server.js` file is the entry point of your application.
   - It imports necessary modules like `mongoose` and `dotenv`.
   - It sets up a connection to the MongoDB database using the `mongoose.connect()` method.
   - The `dotenv.config()` method loads environment variables from the `config.env` file.
   - The `app` module is imported from the `app.js` file.
   - The server listens on the specified `port` and logs a success message.
   - Error handling is implemented for unhandled exceptions and rejections.

These steps and code snippets provide a basic structure for starting a Node.js project with dependencies, environment variables, and server setup.

```json
{
  "name": "yume-kobo",
  "version": "1.0.0",
  "description": "Learning node, express and mongoDB",
  "main": "app.js",
  "scripts": {
    "start": "nodemon server.js",
    "start:prod": "NODE_ENV=production nodemon server.js",
    "debug": "ndb server.js"
  },
  "author": "itsyuimorii",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "bcryptjs": "^2.4.3",
    "crypto": "^1.0.1",
    "dotenv": "^7.0.0",
    "express": "^4.18.2",
    "mongodb": "^5.7.0",
    "mongoose": "^5.13.19",
    "morgan": "^1.10.0",
    "slugify": "^1.3.4",
    "validator": "^13.9.0"
  },
  "devDependencies": {
    "eslint": "^5.16.0",
    "eslint-config-airbnb": "^17.1.1",
    "eslint-config-prettier": "^4.3.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-node": "^8.0.1",
    "eslint-plugin-prettier": "^3.4.1",
    "eslint-plugin-react": "^7.32.2",
    "prettier": "^1.19.1"
  },
  "engines": {
    "node": ">=10.0.0"
  }
}
```

> **config.env**

```bash
NODE_ENV=development
PORT=3000
DATABASE=mongodb+srv://itsyuimorii:<PASSWORD>@cluster0.r7nrqwu.mongodb.net/Yumekobo?retryWrites=true&w=majority

DATABASE_PASSWORD=lX0f8LolPcIEQvOk
```

> **server.js**

```js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
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

- 👉  Code that is only concerned about the application’s implementation, not the underlying business problem we’re trying to solve (e.g. showing and selling tours);
- 👉  Concerned about managing requests and responses;
- 👉  About the app’ s more technical aspects;
- 👉  Bridge between model and view layers.

**BUSINESS LOGIC**(model)

- 👉 Code that actually solve sthe business problem we set

out to solve;

- 👉 Directly related to business rules, how the business works,and business needs;

- 👉 Examples:

  - 👉  Creating new tours in the database;

  - 👉  Checking if user’s password is correct;

  - 👉  Validating user input data;

  - 👉  Ensuring only users who bought a tour can review it.

**Fat models/thin controllers:** offload as much logic as possible into the models, and keep the controllers as simple and lean as possible.

### Mongoose(https://mongoosejs.com/docs/guide.html)

- [Model methods](https://mongoosejs.com/docs/models.html)

- [Queries methods](https://mongoosejs.com/docs/queries.html)

### Mongoose query middleware(https://mongoosejs.com/docs/middleware.html#types-of-middleware)

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


### Error handling 

- operational errors
Problems that we can predict will happen at some point, so we just need to handle them in advance.

👉 Invalid path accessed;
👉 Invalid user input (validator error
from mongoose);
👉 Failed to connect to server;
👉 Failed to connect to database;
👉 Request timeout;

- programming errors
Bugs that we developers introduce into our code. Difficult to find and handle.

👉 Reading properties on undefined;
👉 Passing a number where an object
is expected;
👉 Using await without async;
👉 Using req.query instead of req.body;

### JWT authentication

reference:  [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) ｜ jwt.io(https://jwt.io/)

> install	

```
$ npm install jsonwebtoken
```

> usage

```
jwt.sign(payload, secretOrPrivateKey, [options, callback])
```

 👇The input parameter id of the function is a unique identifier for the user (e.g. user ID) and is used as the content in the payload of the JWT.

```js
//--------------**GENERATE TOKEN**----------------
const signToken = id => {
    //payload, secret, options
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}
```

Inside the function, the jwt.sign method is called to generate the JWT, and it accepts three parameters:

**payload:** this is an object { id } containing the user's ID, which serves as the JWT's payload.
**secret:** this is the key used to sign the JWT, process.env.JWT_SECRET. The key should be a secure random string to ensure that only the server with the correct key can authenticate and decode the JWT.
**options:** this is an object containing options to set the attributes of the JWT, such as the expiration time (expiresIn). process.env.JWT_EXPIRES_IN should be a string indicating the expiration time, which can be a time interval (e.g., '2d' for 2 days) or a specific date/time.
Finally, the signToken function returns the generated JWT and assigns it to the variable token in the following code, which may be used after a successful user authentication or registration to generate and provide the JWT to the user for further authorisation or authentication.



👇This code defines a function called createSendToken that creates and sends a JWT (JSON Web Token) to the user.

```js
//--------------**CREATE TOKEN & SEND TOKEN**----------------
const createSendToken = (user, statusCode, res) => {
    //create token
    const token = signToken(user._id);

    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user
      }
    });
};
```

The input parameters of the function are as follows:

**user:** user object containing information about the user.
**statusCode:** HTTP status code, used to set the status code of the response.
**res:** the response object, used to send the response to the client.
Inside the function, it first calls the signToken function and passes in the user's _id to generate the JWT, then uses the res.status() method to set the status code of the response, which is usually the value of the statusCode parameter.

Next, it uses the res.json() method to send a JSON-formatted response to the client. The response contains the following:

**status:** a string indicating the status of the operation, here it is set to 'success'.
**token:** the generated JWT, the value returned by the signToken function.
**data:** an object containing the user's data. Here, the user parameter is passed into the data attribute.
The purpose of this function is to generate a JWT after user authentication or registration, and respond to the client with the user data. The client can save the JWT and use it in future requests to authenticate and obtain authorisation.



> Testing:  generate token

```
post: 127.0.0.1:3000/api/v1/users/signup
```

```json
body JSON 
{
"name": "test3",
"email":"test3@yuimorii.com",
"password":"11111111",
"passwordConfirm":"11111111"
}
```

```json
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjBiNTljZjkyZTg0ZWY4MmFmN2YxYSIsImlhdCI6MTY4OTMwMjQyOCwiZXhwIjoxNjk3MDc4NDI4fQ.nFDpacNCRnhyRtBhjA4oqJprDd6yQQrLwwI7eVdgiE4",
    "data": {
        "user": {
            "role": "user",
            "active": true,
            "_id": "64b0b59cf92e84ef82af7f1a",
            "name": "test3",
            "email": "test3@yuimorii.com",
            "password": "$2a$12$PpQtl4bBQBEYkKj03aUGJu3VpO8mxh1L9Y1c0q7vbV7Lkfa6/R10C",
            "__v": 0
        }
    }
}
```

