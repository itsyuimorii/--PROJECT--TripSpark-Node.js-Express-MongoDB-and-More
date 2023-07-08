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