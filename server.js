var express     = require('express');
var port        = process.env.PORT || 8080;
// Init the express application
var app = express();
require('./config/express')(app);
// Start the server
app.listen(port);
console.log('app started at http://localhost:' + port);