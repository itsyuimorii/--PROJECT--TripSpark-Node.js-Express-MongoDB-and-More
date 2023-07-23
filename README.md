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
|Section 3| Authentication_and_security | [code](https://github.com/itsyuimorii/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/tree/04_authentication_and_security) |
|Section 4 | Modelling_data_and_advanced_mongoose | [code](https://github.com/itsyuimorii/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/tree/05_modelling_data_and_advanced_mongoose) |
| Section 5 | Server_Side_Rendering-with_Pug_Templates | [code](https://github.com/itsyuimorii/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/tree/06_Server_Side_Rendering-with_Pug_Templates) |
|Section 6 | Advanced_Features_Payments_Email_File_Uploads | [code](https://github.com/itsyuimorii/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/tree/07_Advanced_Features_-Payments_Email_File-Uploads) |
|Section 7 | Setting_Up_Git_and_Deployment | [code](https://github.com/itsyuimorii/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/tree/08_Setting_Up_Git_and_Deployment) |

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

**"start:prod": "NODE_ENV=production nodemon server.js"**
This is a customised command to start the application in production environment mode. The command NODE_ENV=production sets the environment variable NODE_ENV to "production" so that specific settings or configurations can be made in the application based on this variable. Next, use the nodemon package to monitor and automatically restart the server.js file. Such a command is typically used to run an application in a production environment.

**"start": "nodemon server.js"**
This is another custom command to start the application in default mode. It simply uses the nodemon package to monitor and automatically restart the server.js file. Commands like this are typically used to run an application in a development environment.

Using the npm start command will run the command specified by the start attribute, i.e. "nodemon server.js", and use the nodemon package to run the server.js file in the development environment.

Use the npm start start:prod command to run the command specified by the start:prod attribute, "NODE_ENV=production nodemon server.js", and use the nodemon package to run the server.js file in the production environment with the environment variable NODE_ENV set to "production". and set the environment variable NODE_ENV to "production".



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

### Environments setup @postman

**Dev:yumekobo** -> http://127.0.0.1:3000/

**Prod:yumekobo** -> ??

> eg. {{URL}}api/v1/tours



According to the provided code, it is a method to **set an environment variable** in the Postman testing tool using a **pre-request script.**  

```javascript
pm.environment.set("jwt", pm.response.json().token);
```

The purpose of this code is to extract a value named "token" from the response of a request and set it as the value of an environment variable in Postman named "jwt".

Let's break down each part:

- `pm.environment.set`: This is one of the built-in functions in the Postman script, used to set the value of an environment variable.
- `"jwt"`: This is the name of the environment variable that is being set, the variable name that will be assigned the value.
- `pm.response.json()`: This is a combination of Postman built-in objects and methods used to access the response of a request and parse it as JSON format.
- `.token`: Assuming the response is a JSON object, this code retrieves the value of the property named "token" from the JSON object using the `.token` syntax.

Therefore, the purpose of this code is to extract the value of "token" from the request response and set it as the value of the "jwt" environment variable in Postman. This allows you to reference this environment variable in subsequent requests or scripts.![advancedpostman01](file:///Users/itsyuimoriispace/Documents/%E2%9C%B6%20GitHub/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/dev-data/img/advancedpostman01.png)

### Nodemailer

> [Nodemailer](https://nodemailer.com/about/)

```bash 
npm i nodemailer
```


> [SendGrid](https://sendgrid.com/)

> [mailtrap](https://mailtrap.io/home)

1. create inbox
2. copy SMTP settings
3. paste in .env file

```bash
EMAIL_USERNAME= fde41408f46031
EMAIL_PASSWORD=4bf6283683be45
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=25
```

> /utils/email.js

```js
/**
 * @description: This file is used to send emails to the user
 */
const nodemailer = require('nodemailer');  

//----------------**SEND EMAIL**----------------
const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'yui morii <user@yuimorii.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
```

### Forget password
> controllers/authController.js

```js

//--------------**FORGOT PASSWORD**----------------
/**
 * Creates a password reset token and sends it to the user's email. 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {Object} - The response object.
 * @throws {AppError} - If there is no user with the email address.
 * @throws {AppError} - If there is an error sending the email.
 */
exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with email address.', 404));
  }
  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 min)',
      message
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!'
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500
    );
  }
});
```

> routes/userRoutes.js

```
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
```

>  models/userModel.js

```js
// models/userModel.js

const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});


//----------------**MIDDLEWARE: ENCRYPT PASSWORD**----------------
userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

//----------------**INSTANCE METHOD: COMPARE PASSWORD**----------------
/**
 * 
 * @param {string} candidatePassword 
 * @param {string} userPassword 
 * @returns  {boolean}
 */
userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
//----------------**INSTANCE METHOD: CHECK IF PASSWORD CHANGED AFTER JWT ISSUED**----------------
/**
 * 
 * @param {number} JWTTimestamp 
 * @returns {boolean}
 */
userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    //Convert password change times to timestamps
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    // If the JWT timestamp is earlier than the password change timestamp, the password has been changed after the JWT was issued
    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

//----------------**INSTANCE METHOD: CREATE PASSWORD RESET TOKEN**----------------
/**
 * @returns {string} resetToken
 */
userSchema.methods.createPasswordResetToken = function() {
  // Create a random token
  const resetToken = crypto.randomBytes(32).toString('hex');
  // Encrypt the token and store it in the database
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  // Set the token expiration date
  console.log({ resetToken }, this.passwordResetToken);
  // 10 minutes
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

 
const User = mongoose.model('User', userSchema);
module.exports = User;

```

Here is the flow of the `exports.forgotPassword` function across the `authController.js`, `userModel.js`, and `userRoutes.js` files:

1. In the `authController.js` file, the `exports.forgotPassword` function is defined to handle the logic for the forgot password feature.
2. In the `authController.js` file, the `User` model is imported using the `require` statement, which is located in the `userModel.js` file.
3. In the `exports.forgotPassword` function, the `User.findOne` method is called to search for the user in the database using the provided email address.
4. In the `userModel.js` file, the `userSchema.methods.createPasswordResetToken` method is called to generate a password reset token and store it in the `passwordResetToken` field of the user model.
5. In the `userModel.js` file, the `createPasswordResetToken` method is exported as `createPasswordResetToken`.
6. In the `authController.js` file, the `user.createPasswordResetToken()` method is called to generate the password reset token.
7. In the `authController.js` file, the `sendEmail` function is called, passing an options object containing the user's email, subject, and message, to send an email to the user.
8. In the `userRoutes.js` file, the `exports.forgotPassword` function is bound to the `/forgotPassword` route using `router.post('/forgotPassword', authController.forgotPassword)`.
9. When a user accesses the `/forgotPassword` route, the `exports.forgotPassword` function is triggered, and the logic within it is executed.

Summary: The `exports.forgotPassword` function is defined in the `authController.js` file, which retrieves user information by importing the `User` model from the `userModel.js` file. The function calls `user.createPasswordResetToken()` to generate a password reset token and uses the `sendEmail` function to send the reset password email. In the `userRoutes.js` file, the `exports.forgotPassword` function is bound to the corresponding route. When a user visits that route, the logic within the `exports.forgotPassword` function is executed.

### Reset password


```js

//--------------**RESET PASSWORD**----------------
exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3) Update changedPasswordAt property for the user
  
  // 4) Log the user in, send JWT
  createSendToken(user, 200, res);
});
```

以下是 `exports.resetPassword` 函数在 `authController.js`、`userModel.js` 和 `userRoutes.js` 文件之间的流程：

1. 在 `authController.js` 文件中定义了 `exports.resetPassword` 函数，该函数负责处理重置密码的逻辑。
2. 在 `authController.js` 文件中，通过 `require` 语句导入了 `User` 模型，该模型位于 `userModel.js` 文件中。
3. 在 `exports.resetPassword` 函数中，通过调用 `User.findOne` 方法，使用哈希后的密码重置令牌和有效期检查重置密码的凭证。
4. 在 `userModel.js` 文件中，使用 `userSchema.methods` 定义了 `changedPasswordAfter` 方法，用于检查用户在 JWT 发布后是否更改了密码。
5. 在 `userModel.js` 文件中，将 `userSchema.methods.changedPasswordAfter` 方法导出为 `changedPasswordAfter`。
6. 在 `authController.js` 文件中，通过调用 `user.changedPasswordAfter` 方法检查用户是否在 JWT 发布后更改了密码。
7. 在 `authController.js` 文件中，通过调用 `createSendToken` 函数，创建并发送带有新 JWT 的响应给用户。
8. 在 `userRoutes.js` 文件中，通过 `router.patch('/resetPassword/:token', authController.resetPassword)` 将 `exports.resetPassword` 函数绑定到 `/resetPassword/:token` 路由。
9. 当用户访问 `/resetPassword/:token` 路由时，将触发 `exports.resetPassword` 函数，并执行其中的逻辑。

总结：`exports.resetPassword` 函数定义在 `authController.js` 文件中，该函数通过导入 `User` 模型从 `userModel.js` 文件中获取用户信息。函数调用 `user.changedPasswordAfter` 检查用户是否在 JWT 发布后更改了密码，并通过调用 `createSendToken` 函数创建新的 JWT 并将其发送回用户。在 `userRoutes.js` 文件中，将 `exports.resetPassword` 函数绑定到相应的路由上。当用户访问该路由时，将执行 `exports.resetPassword` 函数中的逻辑。





![1](file:///Users/itsyuimoriispace/Documents/%E2%9C%B6%20GitHub/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/dev-data/img/1.png)

![2](file:///Users/itsyuimoriispace/Documents/%E2%9C%B6%20GitHub/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/dev-data/img/2.png)

![3](file:///Users/itsyuimoriispace/Documents/%E2%9C%B6%20GitHub/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/dev-data/img/3.png)

###  Update password

> models/userModel.js

```js
//----------------**MIDDLEWARE: SET PASSWORD CHANGED AT**----------------
userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});
//----------------**MIDDLEWARE: FILTER OUT INACTIVE USERS**----------------
userSchema.pre(/^find/, function(next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

```
> controllers/authController.js

```js
//--------------**UPDATE PASSWORD**----------------
/**
 * Updates the user's password.
 * @throws {AppError} - If the user is not found.
 * @throws {AppError} - If the POSTed password is incorrect.
 * @throws {AppError} - If the POSTed password and passwordConfirm do not match.
 */
exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select('+password');

  // 2) Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // User.findByIdAndUpdate will NOT work as intended!

  // 4) Log user in, send JWT
  createSendToken(user, 200, res);
});

```
> routes/userRoutes.js
```js
router.patch('/updateMyPassword', authController.protect,authController.updatePassword);
```

![4](/Users/itsyuimoriispace/Documents/✶ GitHub/Node.js--Express--MongoDB---More--The-Complete-Bootcamp-2023/dev-data/img/4.png)

### Cookie and JWT 

```js

//--------------**GENERATE TOKEN**----------------
const signToken = id => {
    //payload, secret, options
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

//--------------**CREATE TOKEN & SEND TOKEN*ne*----------------
/**
 * Creates and sends a JWT token as a cookie in the response.
 * @param {Object} user - The user object.
 * @param {number} statusCode - The HTTP status code.
 * @param {Object} res - The response object. 
*/
const createSendToken = (user, statusCode, res) => {
    // Generate a JWT token for the user
    const token = signToken(user._id);
  
    // console.log(token);
    // Set cookie options for the JWT token
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true
    };
   
  // Set secure cookie option in production
  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true;
  }

  // Set the JWT token as a cookie in the response
  res.cookie('jwt', token, cookieOptions);

  // Remove the password field from the user object to avoid exposing it
  user.password = undefined;

  // Send the response with the JWT token and user data
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};
```

### Limiting Field
```bash
npm i express-rate-limit
```

```js

const rateLimit = require('express-rate-limit');

// Limit requests from the same IP address
const limiter = rateLimit({
  max: 100, // 100 requests per hour
  windowMs: 60 * 60 * 1000, // 1 hour
  message: 'Too many requests from this IP, please try again in an hour!'
});

// Apply to all requests to the API
app.use('/api', limiter);
```


### Setting security HTTP headers

```bash
npm i helmet
```

### Data sanitization against NoSQL query injection

```js
npm i express-mongo-sanitize
```

```js
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

//Prevent parameter pollution
app.use(hpp({
  whitelist: [
    'duration',
    'ratingsQuantity',
    'ratingsAverage',
    'maxGroupSize',
    'difficulty',
    'price'
  ]
}));
```

