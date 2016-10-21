var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var storyType = sequelize.define("story_types", {
      story_type: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      story_type_label: Sequelize.STRING
    }, {
      timestamps: true,
    });
    return storyType;
};
