



var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  // mongoose = require('mongoose'),
  // Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/matchMAkingRoutes'); 
routes(app); 


app.listen(port);

console.log('matchMaking API server started on: ' + port);