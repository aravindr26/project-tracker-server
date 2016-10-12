var storyService = require('../services/storyServices');

exports.addStoryData = function(req, res) {
  storyService.createStory(req, res);
}

exports.getAllStories = function(req, res) {
  storyService.getStoryByUser(req.param('project_id'), req.param('user_id'))
  	.then(function (storyList) {
      if(!storyList) {
      	res.send({"status":false,"message":"No stories available"});
      } else {
        res.send({
        	"status": true,
        	"StoryList": storyList
        })
      }
  	});
}