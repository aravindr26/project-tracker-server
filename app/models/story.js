var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var Story = sequelize.define("story_details", {
      story_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      story_summery: Sequelize.STRING,
      story_type: Sequelize.STRING,
      story_priority: Sequelize.STRING,
      story_point: Sequelize.STRING,
      story_assignee: Sequelize.STRING,
      story_description: Sequelize.STRING,
    }, {
      timestamps: true,
    });
    return Story;
};
