var jwt = require('jwt-simple');
var sequelize = require('../../config/sequelizeConfig');
var db = require('../models').User;
//var User = require("../models/user")(sequelize).User;
var config = require('../../config/config');

exports.userRegistration = function(req,res) {
  if(req.body.firstName && req.body.lastName && req.body.phoneNumber && req.body.email && req.body.password) {
    var hashPassword = db.generateHash(req.body.password);
    var newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: hashPassword
    };

    sequelize.sync({ force: false }).then(function () {
      db.create(newUser).then(function (user) {
        res.send({"status": "success", "message": "Successfully registered"});
      }, function (error) {
        res.send({"status": "failed", "message": "Registration failed"});
      });
    });
  } else {
    res.send({"status": "failed", "message": "Mandatory fields are missing."});
  }
}

exports.userSignIn = function(req, res) {
  db.findOne({where: {email: req.body.email}}).then(function(user) {
    if (!user) {
      res.send({"status": false, "message": 'Authentication failed. User not found.'});
    } else {
      var isPasswordMatch = user.isValidPassword(req.body.password, user);

      if(isPasswordMatch) {
        // if user is found and password is right create a token
        var token = jwt.encode(user, config.secret);
        var fullName = user.dataValues.firstName +' '+ user.dataValues.lastName;
        // return the information including token as JSON
        res.json({status: true, token: token, userId: user.dataValues.userId, userName: fullName});
      } else {
        res.send({status: false, "message": 'User not Found'});
      }
    }
  });
};

 /*To check whether the User exists or not*/
exports.userAuthCheck = function(email) {
  return db.findOne({where: {email: email}}).then(function(user) {
    if(!user) {
      return false;
    } else {
      return user;
    }
  });
}

/*Get the list of user details by ID*/
exports.getUserListById = function (userList) {
  return db.findAll({ 
    attributes: ['userId', 'firstName', 'lastName', 'email'],
    where: {
    userID: {
      $in: userList
    }
  }}).then(function (memberData) {
    if (memberData) {
      return memberData;
    }
  })
}

exports.fetchUserData = function(req, res) {
  return db.findOne({
    where: {
      userId: req.param('user_id')
    }
  }).then(function(data) {
    return data;
  })
}

exports.updateUserData = function(req, res) {
  return db.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email
  },{
    where: {
      userId: req.body.userId
    }
  }).then(function(data) {
    return data;
  })
}
 
exports.getUserByEmail = function(req,res) {
  return db.findOne({
    where: {
      email: req.param('email')
    }
  }). then(function(data) {
    return data;
  })
}

exports.updatePassword = function(req, res) {
  var hashPassword = db.generateHash(req.body.password);
  return db.update({
    password: hashPassword
  },{
    where: {
      password: req.body.user_token
    }
  }).then(function(data){
    return data;
  })
}