var userService = require('../services/userServices');

exports.userSignUp = function(req, res) {
  userService.userRegistration(req,res);
}

exports.userLogin = function(req, res) {
  userService.userSignIn(req, res);
}

exports.getUserInfoById = function(req, res) {
	userService.fetchUserData(req, res)
	.then(function(userData) {
		if(userData) {
			res.send({
				status: true,
				userInfo: userData
			});
		} else {
			res.send({
				status: false
			});
		}
	})
}

exports.updateUserInfo = function(req, res) {
	userService.updateUserData(req, res)
	.then(function(data) {
		if(data) {
			res.send({
				status: true,
				message: "Details updated successfully"
			});
		}
	})
}
