var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var storyComment = sequelize.define("story_comments", {
      story_comment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      story_comment: Sequelize.STRING
    }, {
      timestamps: true,
    });
    return storyComment;
};
