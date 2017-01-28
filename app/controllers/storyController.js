var storyService = require('../services/storyServices');
var json2csv = require('json2csv');

exports.addStoryData = function(req, res) {
  storyService.createStory(req, res).
  then(function(data){
    console.log('data in story add=---' , data);
    if(data) {
      res.send({
        status: true,
        data: data
      });
    } else{
      res.send({
        status: false
      })
    }
  })
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

exports.exportStoryData =  function(req, res) {
  var data= [];
  storyService.fetchStoryById(req, res)
  .then(function(storyInfo) {
    var fields = ['story_summery','story_type', 'story_priority', 'story_point', 'story_description', 'story_status', 'story_is_blocked'];
    var csv = json2csv({ data: storyInfo, fields: fields });
    res.setHeader('Content-disposition', 'attachment; filename=storyDetails.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(csv);
  })
}

exports.deleteStoryById = function(req, res) {
  storyService.deleteStoryInfoById(req, res)
  .then(function(data) {
    if(data === 1){
      res.send({
        deleted: true,
        message: 'Story deleted successfully'
      });
    } else{
      res.send({
        deleted: false,
        message: 'Failed to delete the story'
      });
    }
  })
}

exports.updateStoryDescription = function(req, res) {
  storyService.updateStoryDescription(req, res)
  .then(function(data) {
    if(data) {
      res.send({
        status: true,
        message: "Data updated successfully"
      });
    }
  })
}


exports.getTaskCountByUser = function(req, res) {
  var featureCount = 0;
  var bugCount = 0;
  storyService.getTaskCount(req, res).
  then(function(data) {
    if(data) {
      for (var i=0;i<data.length;i++) {
        if(data[i].story_type === '1') {
          bugCount ++;
        } else {
          featureCount ++;
        }
      }
      res.send({
        status: true,
        featureCount: featureCount,
        bugCount: bugCount
      });
    }
  })
}