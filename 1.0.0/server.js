const mongoose = require('mongoose');
// Import the dotenv library for reading environment variables.
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
// Import the custom app module.

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

// Get the specified port number, defaulting to 3000 if not set.
const port = process.env.PORT || 3000;

// Start the application and listen on the specified port.
app.listen(port, error => {
  if (!error)
    console.log(
      `Server is Successfully Running, and App is listening on port ${port}...`
    );
  else console.log("Error occurred, server can't start", error);
});
