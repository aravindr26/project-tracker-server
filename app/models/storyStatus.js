var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var storyStatus = sequelize.define("story_status", {
      story_status: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      story_status_label: Sequelize.STRING
    }, {
      timestamps: true,
    });
    return storyStatus;
};
