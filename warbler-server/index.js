// my imports from package.json
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

const PORT = 8081;

// what we are telling our app to use
app.use(cors())
app.use(bodyParser.json());

//all my routes

// error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.listen(PORT, function() {
    console.log('Server is running on port $(PORT)');
})
