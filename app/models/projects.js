var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var Projects = sequelize.define("project_details", {
      project_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      project_name: Sequelize.STRING,
      project_description: Sequelize.STRING
    }, {
      timestamps: false,
      createdAt: false,
      updatedAt: false
    });
    return Projects;
};
