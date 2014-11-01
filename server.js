

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3030; 		// set our port

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lrs'); // connect to our database


// ROUTES FOR OUR API
// =============================================================================

var routes = require('./app/routes/scratchcodes');
// all of our routes will be prefixed with /api
app.use('/api', routes);


/*
app.use(function(req, res, next){
  res.send(404, 'Sorry cant find that!');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});*/


// START THE SERVER
// =============================================================================
var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Magic happens at http://%s:%s', host, port)
})





