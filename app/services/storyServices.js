var sequelize = require('../../config/sequelizeConfig');
var _ = require('lodash');
var db = require('../models').story;

exports.createStory = function(req, res) {
  var storyDetails = {
    story_summery: req.body.storySummery,
    story_type: req.body.storyType,
    story_priority: req.body.storyPriority,
    story_point: req.body.storyPoint,
    story_assignee: req.body.storyAssignee,
    story_description: req.body.storyDescription,
    project_id: req.body.projectId
  };

  return sequelize.sync({ force: false }).then(function () {
      db.create(storyDetails).then(function (data) {
        return data;
      }, function (error) {
        return false;
      });
    });
}

exports.getStoryByUser = function (projectId, userId) {
  var storyData = [];
  return db.findAll({where: {project_id: projectId, story_assignee: userId}})
      .then(function(storyList) {
        _(storyList).forEach(function (value, key) {
          storyData.push(storyList[key].dataValues);
        })
        return storyData;
      })
} 