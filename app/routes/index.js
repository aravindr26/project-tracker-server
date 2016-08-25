var userAuthentication = require('./user.authentication.route');
var projectDetails = require('./project.details.route');
var projectMemberManagement = require('./project.member.management.route');
module.exports = function(app) {
  app.use('/user', userAuthentication);
  app.use('/project', projectDetails);
  app.use('/projectMember', projectMemberManagement)
}