 var storyLabelService = require('../services/storyLabelServices');

exports.addStoryLabel = function (req, res) {
  storyLabelService.addLabels(req,res);
}

exports.getlabelsByStory = function(req, res) {
	storyLabelService.getLabelList(req, res).then( function (labelList) {
		if(!labelList) {
          res.send({"status": false, "message": "No labels available"});
		} else {
          res.send({"status": true, "labelList":labelList});
		}
	});
}