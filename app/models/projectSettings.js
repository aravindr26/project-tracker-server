var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var Projects = sequelize.define("project_settings", {
      project_settings_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      project_start_date: Sequelize.DATE,
      project_sprint_duration: Sequelize.INTEGER,
      project_end_date: Sequelize.DATE
    }, {
      timestamps: false,
      createdAt: false,
      updatedAt: false
    });
    return ProjectSettings;
};
