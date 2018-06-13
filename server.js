
const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/matchMAkingRoutes'); 
routes(app); 

app.listen(port);

console.log('matchMaking API server started on: ' + port);