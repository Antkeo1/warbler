// my imports
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');

const PORT = 8081;

// what we are telling our app to use
app.use(cors());
app.use(bodyParser.json())

// error handlers
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
})

app.use(errorHandler);

// to listen to port
app.listen(PORT, function() {
  console.log(`Server is starting on ${PORT}`)
})
// app.listen(5000)
