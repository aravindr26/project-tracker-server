var sequelize = require('../../config/sequelizeConfig');
var _ = require('lodash');
var user = require('../models').User;
var db = require('../models').storyComment;

exports.addComment = function(req, res) {

 var storyComment = {
   story_comment: req.body.story_comment,
   story_id: req.body.story_id,
   userId: req.body.user_id
 };

	sequelize.sync({ force: false }).then(function () {
	  db.create(storyComment).then(function (data) {
	    res.send({"status":true, "message": "Comment added successfully"});
	  }, function (error) {
	    res.send({"status":false, "message": "Failed to add comment"});
	  });
	});
}

exports.fetchCommentByStory = function(req, res) {
  var storyCommentsList = [];
  return db.findAll({
      where: {
        story_id: req.param('story_id')
      },
      include: [{
        model: user,
        attributes: ['email', 'firstName', 'lastName']
      }]
    })
    .then(function(storyList) {
      _(storyList).forEach(function(value, key) {
        storyCommentsList.push(storyList[key].dataValues);
      })
      return storyCommentsList;

    })
}

exports.deleteCommentDataById = function(req, res) {
  return db.destroy({
    where: {
      story_comment_id: req.param('comment_id')
    }
  }).then(function(data) {
    return data;
  })
}