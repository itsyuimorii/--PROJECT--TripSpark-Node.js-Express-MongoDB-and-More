const express = require('express');
const fs = require('fs');

 
const app = express();

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
    );
    
    app.use((req, res, next) => {
        req.requestTime = new Date().toISOString();
        next();
    });
    
 
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data:{
        tours
    }
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
