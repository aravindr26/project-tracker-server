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

exports.updateStoryStatus = function(req, res) {
  storyService.updateStoryStatusInfo(req, res);
}

exports.fetchStoryByStatus = function(req, res) {
  storyService.fetchStoryByStaus(req.param('project_id'), req.param('status'))
  .then(function(storyList) {
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

exports.fetchTopStories = function(req, res) {
  storyService.fetchTopStories(req, res)
  .then(function(storyList) {
    if(!storyList) {
      res.send({"status":false,"message":"No stories available"});
    } else {
      res.send({
          "status": true,
          "StoryList": storyList
        })
    }
  })
}

exports.saveStoryStatus = function(req, res) {
  storyService.addStoryStatus(req, res);
}

exports.saveStoryType =function(req, res) {
  storyService.addStoryType(req, res);
}