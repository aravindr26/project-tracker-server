var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var ProjectSettings = sequelize.define("project_settings", {
      project_settings_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      project_start_date: Sequelize.STRING,
      project_sprint_duration: Sequelize.INTEGER,
      project_sprint_starts_on: Sequelize.INTEGER,
      project_end_date: Sequelize.STRING
    }, {
      timestamps: true,
      createdAt: true,
      updatedAt: true
    });
    return ProjectSettings;
};