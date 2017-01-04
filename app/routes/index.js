var jwt = require('jwt-simple');
var config = require('../../config/config');
var userAuthentication = require('./user.authentication.route');
var projectDetails = require('./project.details.route');
var projectMemberManagement = require('./project.member.management.route');
var storyDetails = require('./story.details.route');
var tokenCheck = require('../../config/tokenValidation');
module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "OPTIONS, DELETE, GET, PUT, POST");
    next();
  });

  app.use('/user', userAuthentication);
  app.use(function(req, res, next) {
    var token  = tokenCheck.tokenAuthentication(req, res, jwt, config);
    if(token) {
      req.body.userId = token.userId;
      next();
    } else {
      res.send({'status': false, 'message': 'Authentication failed'});
    }
  });
  app.use('/project', projectDetails);
  app.use('/projectMember', projectMemberManagement);
  app.use('/story', storyDetails);
}