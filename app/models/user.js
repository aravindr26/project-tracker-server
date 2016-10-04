var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');
module.exports = function (sequelize) {
    var User = sequelize.define("user_details", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      phoneNumber: Sequelize.BIGINT,
      email: Sequelize.STRING,
      password: Sequelize.STRING
    }, {
      instanceMethods: {
        isValidPassword: function(password, user) {
          return bcrypt.compareSync(password, user.password);
        },
      },
      classMethods: {
        generateHash: function(password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        }
      }
    });
    return User;
};
