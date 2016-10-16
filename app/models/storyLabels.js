var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var storyLabel = sequelize.define("story_labels", {
      story_label_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      story_label: Sequelize.STRING
    }, {
      timestamps: true,
    });
    return storyLabel;
};
