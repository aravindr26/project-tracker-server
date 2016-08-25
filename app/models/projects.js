var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var Projects = sequelize.define("project_details", {
      project_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      project_name: Sequelize.STRING,
      project_description: Sequelize.STRING,
      project_start_date: Sequelize.DATE,
      project_sprint_duration: Sequelize.INTEGER,
      project_end_date: Sequelize.DATE
    });
    return Projects;
};
