var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var sequelize   = require('./sequelizeConfig');
var passport    = require('passport')
var jwt         = require('jwt-simple');
var config      = require('./config');

module.exports = function(app) {
  
  // get our request parameters
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(passport.initialize());
 
  // log to console
  app.use(morgan('dev'));
  require('../app/routes')(app);
  sequelize.sync().then(function (err) {
    if(err){
      console.log('sequelize sync error');
    }else {
      console.log('sync success');
      require('../app/routes')(app);
    }
  });
 
  // Use the passport package in our application
  return app;
};