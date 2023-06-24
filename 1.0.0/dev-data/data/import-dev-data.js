const fs = require('fs'); // Require the file system module to read/write files.
const mongoose = require('mongoose'); // Require the Mongoose library for interacting with MongoDB.
const dotenv = require('dotenv'); // Require the dotenv library to read environment variables from a .env file.
const Tour = require('./../../models/tourModel'); // Require the Tour model from the tourModel.js file.

dotenv.config({ path: './config.env' }); // Load the environment variables from the config.env file.

const DB = process.env.DATABASE.replace(
  // Replace the password placeholder in the database connection string with the actual password from the environment variable.
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    // Connect to the MongoDB database using the connection string and some options.
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!')); // Log a success message if the connection is successful.

// READ JSON FILE
const tours = JSON.parse(
  // Read the tours-simple.json file and parse its contents as a JavaScript object.
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  // Define a function to import the tour data into the database.
  try {
    await Tour.create(tours); // Create new tours in the database using the Tour model and the parsed data from the JSON file.
    console.log('Data successfully loaded!'); // Log a success message if the import is successful.
  } catch (err) {
    console.log(err); // Log any errors that occur during the import.
  }
  process.exit(); // Exit the Node.js process.
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  // Define a function to delete all tour data from the database.
  try {
    await Tour.deleteMany(); // Delete all tours in the database using the Tour model.
    console.log('Data successfully deleted!'); // Log a success message if the deletion is successful.
  } catch (err) {
    console.log(err); // Log any errors that occur during the deletion.
  }
  process.exit(); // Exit the Node.js process.
};

if (process.argv[2] === '--import') {
  // Check the command line arguments for an import flag.
  importData(); // If the flag is present, call the import function to import the data into the database.
} else if (process.argv[2] === '--delete') {
  // Check the command line arguments for a delete flag.
  deleteData(); // If the flag is present, call the delete function to delete all tour data from the database.
}

/* This script reads the tour data from a JSON file, and either imports it into a MongoDB database or deletes all tour data from the database. The dotenv library is used to read environment variables from a .env file, and the mongoose library is used to interact with MongoDB. The Tour model is required from the tourModel.js file, which defines the schema and methods for interacting with the tours collection in the database.

The DB variable is constructed by replacing a password placeholder in the DATABASE environment variable with the actual password. The mongoose.connect() method is then used to connect to the MongoDB database specified by the DB variable, with some options to avoid deprecation warnings.

The fs.readFileSync() method is used to read the contents of the tours-simple.json file, and JSON.parse() is used to parse the JSON data as a JavaScript object.  */
