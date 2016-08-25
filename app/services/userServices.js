var jwt         = require('jwt-simple');
var sequelize = require('../../config/sequelizeConfig');
var db = require('../models').User;
//var User = require("../models/user")(sequelize).User;
var config = require('../../config/config');

exports.userRegistration = function(req,res) {
  if(req.body.firstName && req.body.lastName && req.body.phoneNumber && req.body.email && req.body.password) {
    var hashPassword = db.User.generateHash(req.body.password);
    var newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: hashPassword
    };

    sequelize.sync({ force: false }).then(function () {
      db.User.create(newUser).then(function () {
        res.send({"status": "success", "message": "Successfully registered"});
      }, function (error) {
        res.send({"status": "failed", "message": "Registration failed"});
      });
    });
  } else {
    res.send({"status": "failed", "message": "Mandatory fields are missing."});
  }
}

exports.userAuthentication = function(req, res) {
  db.User.findOne({where: {email: req.body.email}}).then(function(user) {
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      var isPasswordMatch = user.isValidPassword(req.body.password, user);

      if(isPasswordMatch) {
        console.log('user', user);
        // if user is found and password is right create a token
        var token = jwt.encode(user, config.secret);
        // return the information including token as JSON
        res.json({success: true, token: 'JWT_' + token});
      } else {
        res.send({success: false, msg: 'Authentication failed. Wrong password.'});
      }
    }
  });
};