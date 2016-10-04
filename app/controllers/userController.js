var userService = require('../services/userServices');

exports.userSignUp = function(req, res) {
  userService.userRegistration(req,res);
}

exports.userLogin = function(req, res) {
  userService.userSignIn(req, res);
}
