const express = require('express');
 

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
    );
    
    app.use((req, res, next) => {
        req.requestTime = new Date().toISOString();
        next();
    });
    
const app = express();
 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
